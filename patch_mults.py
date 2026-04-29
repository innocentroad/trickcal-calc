import re

def main():
    # --- UPDATE STYLE.CSS ---
    css_path = r"d:\Games\etc\trickcal\calculator\style.css"
    with open(css_path, 'r', encoding='utf-8') as f:
        css = f.read()

    # Rewrite multipliers-grid
    css_to_replace = r'''\.multipliers-grid \{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
\}'''

    new_css = '''\.multipliers-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
}
.multipliers-grid .input-group {
    margin-bottom: 0;
}
.multipliers-grid .input-group label {
    font-size: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.multipliers-grid .input-group input, 
.multipliers-grid .input-group select {
    padding: 0.3rem;
    font-size: 0.9rem;
    text-align: center;
}'''

    css = re.sub(css_to_replace, new_css, css)

    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css)

    # --- UPDATE INDEX.HTML ---
    html_path = r"d:\Games\etc\trickcal\calculator\index.html"
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Remove the bulky warning text from the Additional label to save space
    html = html.replace('<span class="warning-text" id="add-mult-warning" style="display:none; font-size: 0.7rem;">(&lt; 20% min)</span>', '')
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)


    print("Patched multipliers layout to 1 row!")

if __name__ == "__main__":
    main()
