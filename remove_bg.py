from PIL import Image
import numpy as np
from collections import deque

img = Image.open("images/profile.png").convert("RGBA")
data = np.array(img, dtype=np.uint8)
h, w = data.shape[:2]

# --- Edge-based flood fill to detect ONLY the outer background ---
# Start from all 4 edges and flood-fill outward
# Background = checkerboard = near-white OR near-light-grey pixels

def is_background(r, g, b):
    # Checkerboard has two colors: white (~255,255,255) and light grey (~200-220,200-220,200-220)
    is_white = (r > 230 and g > 230 and b > 230)
    is_grey  = (r > 190 and g > 190 and b > 190 and
                abs(int(r) - int(g)) < 20 and abs(int(g) - int(b)) < 20)
    return is_white or is_grey

# BFS flood fill from edges
visited = np.zeros((h, w), dtype=bool)
queue = deque()

# Seed from all edges
for x in range(w):
    for y in [0, h-1]:
        r, g, b, a = data[y, x]
        if is_background(r, g, b) and not visited[y, x]:
            visited[y, x] = True
            queue.append((y, x))

for y in range(h):
    for x in [0, w-1]:
        r, g, b, a = data[y, x]
        if is_background(r, g, b) and not visited[y, x]:
            visited[y, x] = True
            queue.append((y, x))

# BFS
while queue:
    y, x = queue.popleft()
    for dy, dx in [(-1,0),(1,0),(0,-1),(0,1)]:
        ny, nx = y + dy, x + dx
        if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
            r, g, b, a = data[ny, nx]
            if is_background(r, g, b):
                visited[ny, nx] = True
                queue.append((ny, nx))

# Make all flood-filled (background) pixels transparent
data[visited] = [0, 0, 0, 0]

result = Image.fromarray(data)
result.save("images/profile_transparent_v2.png")
print(f"Done! Removed {visited.sum()} background pixels. Saved as profile_transparent_v2.png")
