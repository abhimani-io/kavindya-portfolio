import numpy as np
from PIL import Image

def remove_icons_by_bbox(img_path, output_path):
    img = Image.open(img_path).convert("RGBA")
    data = np.array(img)
    
    h, w = data.shape[:2]
    
    # We will clear the regions where the icons are.
    # The girl is centrally located.
    # We can just clear pixels outside a central bounding box, 
    # but the purple outline might go a bit wide.
    # Let's inspect the bounding boxes of connected components again.
    
    alpha = data[:, :, 3]
    mask = alpha > 0
    visited = np.zeros((h, w), dtype=bool)
    components = []
    
    from collections import deque
    for y in range(h):
        for x in range(w):
            if mask[y, x] and not visited[y, x]:
                component_pixels = []
                queue = deque([(y, x)])
                visited[y, x] = True
                
                while queue:
                    cy, cx = queue.popleft()
                    component_pixels.append((cy, cx))
                    
                    for dy, dx in [(-1,0), (1,0), (0,-1), (0,1), (-1,-1), (-1,1), (1,-1), (1,1)]:
                        ny, nx = cy + dy, cx + dx
                        if 0 <= ny < h and 0 <= nx < w:
                            if mask[ny, nx] and not visited[ny, nx]:
                                visited[ny, nx] = True
                                queue.append((ny, nx))
                components.append(component_pixels)
                
    # Sort components by size
    components.sort(key=len, reverse=True)
    
    # Let's keep the girl (components[0]) and the purple outline.
    # The purple outline is likely the second largest component, or the one whose bounding box covers a large area.
    
    keep_mask = np.zeros((h, w), dtype=bool)
    
    for i, comp in enumerate(components):
        pixels = np.array(comp)
        min_y, min_x = pixels.min(axis=0)
        max_y, max_x = pixels.max(axis=0)
        
        box_h = max_y - min_y
        box_w = max_x - min_x
        
        # Keep components that are large (like the girl) 
        # OR components that are very tall/wide (like the purple outline)
        # The floating icons are relatively small (e.g. less than 200x200 pixels)
        
        if len(comp) > 100000: # Girl
            keep = True
        elif box_h > h // 2 or box_w > w // 2: # Purple outline (wraps around)
            keep = True
        else:
            keep = False
            
        if keep:
            print(f"Keeping component {i} with size {len(comp)} and bbox {box_w}x{box_h}")
            for y, x in comp:
                keep_mask[y, x] = True
        else:
            print(f"Removing component {i} with size {len(comp)} and bbox {box_w}x{box_h}")
            
    data[~keep_mask] = [0, 0, 0, 0]
    
    result = Image.fromarray(data)
    result.save(output_path)
    print(f"Saved {output_path}")

if __name__ == '__main__':
    remove_icons_by_bbox('images/profile_transparent_v2.png', 'images/profile_clean.png')
