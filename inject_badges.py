content = open('index.html', 'r', encoding='utf-8').read()

# Find the closing </div> after react blob icon and insert Java + GitHub before it
old = '''            <!-- React blob icon -->
            <div class="blob-icon blob-icon--react" style="animation-delay:1.5s">
              <div class="blob-icon__accents">
                <span class="blob-accent blob-accent--5"></span>
                <span class="blob-accent blob-accent--6"></span>
              </div>
              <svg viewBox="0 0 180 180" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blobGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#A855F7"/>
                    <stop offset="100%" style="stop-color:#3B82F6"/>
                  </linearGradient>
                </defs>
                <path d="M92 12 C132 10, 166 40, 167 82 C168 122, 140 164, 98 168 C56 172, 14 144, 12 102 C10 60, 42 14, 92 12Z" fill="white" stroke="url(#blobGrad3)" stroke-width="5"/>
                <circle cx="90" cy="90" r="9" fill="#61DAFB"/>
                <ellipse cx="90" cy="90" rx="40" ry="15" fill="none" stroke="#61DAFB" stroke-width="4"/>
                <ellipse cx="90" cy="90" rx="40" ry="15" fill="none" stroke="#61DAFB" stroke-width="4" transform="rotate(60 90 90)"/>
                <ellipse cx="90" cy="90" rx="40" ry="15" fill="none" stroke="#61DAFB" stroke-width="4" transform="rotate(120 90 90)"/>
              </svg>
            </div>

          </div>'''

new = '''            <!-- React blob icon -->
            <div class="blob-icon blob-icon--react" style="animation-delay:1.5s">
              <div class="blob-icon__accents">
                <span class="blob-accent blob-accent--5"></span>
                <span class="blob-accent blob-accent--6"></span>
              </div>
              <svg viewBox="0 0 180 180" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blobGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#A855F7"/>
                    <stop offset="100%" style="stop-color:#3B82F6"/>
                  </linearGradient>
                </defs>
                <path d="M92 12 C132 10, 166 40, 167 82 C168 122, 140 164, 98 168 C56 172, 14 144, 12 102 C10 60, 42 14, 92 12Z" fill="white" stroke="url(#blobGrad3)" stroke-width="5"/>
                <circle cx="90" cy="90" r="9" fill="#61DAFB"/>
                <ellipse cx="90" cy="90" rx="40" ry="15" fill="none" stroke="#61DAFB" stroke-width="4"/>
                <ellipse cx="90" cy="90" rx="40" ry="15" fill="none" stroke="#61DAFB" stroke-width="4" transform="rotate(60 90 90)"/>
                <ellipse cx="90" cy="90" rx="40" ry="15" fill="none" stroke="#61DAFB" stroke-width="4" transform="rotate(120 90 90)"/>
              </svg>
            </div>

            <!-- Java blob icon -->
            <div class="blob-icon blob-icon--java" style="animation-delay:0.4s">
              <div class="blob-icon__accents">
                <span class="blob-accent blob-accent--7"></span>
                <span class="blob-accent blob-accent--8"></span>
              </div>
              <svg viewBox="0 0 180 180" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blobGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#A855F7"/>
                    <stop offset="100%" style="stop-color:#3B82F6"/>
                  </linearGradient>
                </defs>
                <!-- Fully closed blob shape -->
                <path d="M85 8 C110 5, 145 18, 162 45 C178 70, 175 108, 160 135 C145 162, 115 175, 85 172 C55 169, 22 152, 12 122 C2 92, 8 52, 28 30 C48 8, 62 11, 85 8 Z" fill="white" stroke="url(#blobGrad4)" stroke-width="5"/>
                <!-- Java logo: red flame + blue water -->
                <path d="M80 55 C75 65 65 72 68 85 C70 92 80 96 80 96 C78 88 82 84 85 78 C90 68 88 58 80 55Z" fill="#E76F00"/>
                <path d="M90 60 C85 68 78 75 80 85 C82 91 88 94 88 94 C86 87 90 83 92 77 C95 68 94 62 90 60Z" fill="#E03A00"/>
                <!-- Blue water ripples -->
                <ellipse cx="90" cy="112" rx="28" ry="7" fill="none" stroke="#5382A1" stroke-width="3.5"/>
                <ellipse cx="90" cy="124" rx="22" ry="5.5" fill="none" stroke="#5382A1" stroke-width="3"/>
                <ellipse cx="90" cy="135" rx="16" ry="4" fill="none" stroke="#5382A1" stroke-width="2.5"/>
              </svg>
            </div>

            <!-- GitHub blob icon -->
            <div class="blob-icon blob-icon--github" style="animation-delay:1.1s">
              <div class="blob-icon__accents">
                <span class="blob-accent blob-accent--9"></span>
                <span class="blob-accent blob-accent--10"></span>
              </div>
              <svg viewBox="0 0 180 180" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blobGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#A855F7"/>
                    <stop offset="100%" style="stop-color:#3B82F6"/>
                  </linearGradient>
                </defs>
                <!-- Fully closed blob shape -->
                <path d="M92 10 C122 8, 158 25, 168 58 C178 90, 168 130, 145 152 C122 174, 88 178, 60 165 C32 152, 8 124, 8 90 C8 56, 28 20, 58 10 C68 7, 80 11, 92 10 Z" fill="white" stroke="url(#blobGrad5)" stroke-width="5"/>
                <!-- GitHub Octocat mark -->
                <circle cx="90" cy="82" r="30" fill="#24292E"/>
                <path d="M90 52 C73 52, 60 65, 60 82 C60 95 68 106 80 110 C78 107 78 104 78 102 L78 98 C73 99 70 96 69 93 C68 90 67 88 65 87 C64 86 63 85 65 85 C68 85 70 88 71 90 C73 93 76 94 79 93 C80 91 81 89 82 88 C76 86 70 82 70 72 C70 67 72 62 76 59 C75 56 74 51 76 48 C79 47 84 50 90 53 C96 50 101 47 104 48 C106 51 105 56 104 59 C108 62 110 67 110 72 C110 82 104 86 98 88 C99 89 100 91 100 93 L100 102 C100 104 100 107 98 110 C110 106 118 95 118 82 C118 65 105 52 90 52Z" fill="white"/>
                <path d="M78 102 C78 104 79 105 80 104 L80 100 C79 100 78 101 78 102Z" fill="#24292E"/>
                <path d="M100 102 C100 104 101 105 102 104 L102 100 C101 100 100 101 100 102Z" fill="#24292E"/>
              </svg>
            </div>

          </div>'''

if old in content:
    content = content.replace(old, new, 1)
    open('index.html', 'w', encoding='utf-8').write(content)
    print('Done! Java and GitHub blob icons added.')
else:
    print('ERROR: Target not found')
