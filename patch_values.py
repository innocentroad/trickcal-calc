import re

def main():
    path = r"d:\Games\etc\trickcal\calculator\index.html"
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update Attack
    content = re.sub(r'<input type="range" id="atk-slider" min="1" max="100000" value="10000">', 
                     r'<input type="range" id="atk-slider" min="1" max="150000" value="50000">', content)
    content = re.sub(r'<input type="number" id="atk-number" min="1" max="1000000" value="10000">', 
                     r'<input type="number" id="atk-number" min="1" max="1000000" value="50000">', content)

    # Update Defense
    content = re.sub(r'<input type="range" id="def-slider" min="1" max="100000" value="5000">', 
                     r'<input type="range" id="def-slider" min="1" max="150000" value="50000">', content)
    content = re.sub(r'<input type="number" id="def-number" min="1" max="1000000" value="5000">', 
                     r'<input type="number" id="def-number" min="1" max="1000000" value="50000">', content)

    # Update Crit
    content = re.sub(r'<input type="range" id="crit-slider" min="1" max="10000" value="1000">', 
                     r'<input type="range" id="crit-slider" min="1" max="150000" value="30000">', content)
    content = re.sub(r'<input type="number" id="crit-number" min="1" max="100000" value="1000">', 
                     r'<input type="number" id="crit-number" min="1" max="1000000" value="30000">', content)

    # Update Crit DMG
    content = re.sub(r'<input type="range" id="crit-dmg-slider" min="1" max="10000" value="1000">', 
                     r'<input type="range" id="crit-dmg-slider" min="1" max="150000" value="30000">', content)
    content = re.sub(r'<input type="number" id="crit-dmg-number" min="1" max="100000" value="1000">', 
                     r'<input type="number" id="crit-dmg-number" min="1" max="1000000" value="30000">', content)

    # Update Crit Resist
    content = re.sub(r'<input type="range" id="crit-res-slider" min="1" max="10000" value="500">', 
                     r'<input type="range" id="crit-res-slider" min="1" max="150000" value="30000">', content)
    content = re.sub(r'<input type="number" id="crit-res-number" min="1" max="100000" value="500">', 
                     r'<input type="number" id="crit-res-number" min="1" max="1000000" value="30000">', content)

    # Update Crit DMG Resist
    content = re.sub(r'<input type="range" id="crit-dmg-res-slider" min="1" max="10000" value="500">', 
                     r'<input type="range" id="crit-dmg-res-slider" min="1" max="150000" value="30000">', content)
    content = re.sub(r'<input type="number" id="crit-dmg-res-number" min="1" max="100000" value="500">', 
                     r'<input type="number" id="crit-dmg-res-number" min="1" max="1000000" value="30000">', content)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Patched values in index.html")

if __name__ == "__main__":
    main()
