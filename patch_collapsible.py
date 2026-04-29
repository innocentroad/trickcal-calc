import re

def main():
    # --- UPDATE INDEX.HTML ---
    html_path = r"d:\Games\etc\trickcal\calculator\index.html"
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Wrap Attacker Stats
    html = re.sub(
        r'(<h2>攻撃側ステータス</h2>)([\s\S]*?)(<div class="divider"></div>)',
        r'<h2 class="collapsible-header">攻撃側ステータス <span class="toggle-icon">▼</span></h2>\n                <div class="collapsible-content">\2</div>\n                \3',
        html
    )

    # Wrap Defender Stats
    html = re.sub(
        r'(<h2>防御側ステータス</h2>)([\s\S]*?)(<div class="divider"></div>)',
        r'<h2 class="collapsible-header">防御側ステータス <span class="toggle-icon">▼</span></h2>\n                <div class="collapsible-content">\2</div>\n                \3',
        html
    )

    # Wrap Multipliers
    html = re.sub(
        r'(<h2>倍率 \(\%\)</h2>)([\s\S]*?)(</div>\n\n            <!-- Right Column)',
        r'<h2 class="collapsible-header">倍率 (%) <span class="toggle-icon">▼</span></h2>\n                <div class="collapsible-content">\2</div>\n            \3',
        html
    )

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)

    # --- UPDATE STYLE.CSS ---
    css_path = r"d:\Games\etc\trickcal\calculator\style.css"
    with open(css_path, 'a', encoding='utf-8') as f:
        f.write('''\n
/* Collapsible Sections */
.collapsible-header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    transition: color 0.2s;
}
.collapsible-header:hover {
    color: var(--accent-color);
}
.toggle-icon {
    font-size: 0.8em;
    transition: transform 0.2s;
    color: #94a3b8;
}
.collapsible-header.collapsed .toggle-icon {
    transform: rotate(-90deg);
}
.collapsible-content {
    transition: max-height 0.3s ease-out;
}
.collapsed-content {
    display: none !important;
}
''')

    # --- UPDATE SCRIPT.JS ---
    js_path = r"d:\Games\etc\trickcal\calculator\script.js"
    with open(js_path, 'a', encoding='utf-8') as f:
        f.write('''\n
// Collapsible Logic
document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
        header.classList.toggle('collapsed');
        const content = header.nextElementSibling;
        if (content && content.classList.contains('collapsible-content')) {
            content.classList.toggle('collapsed-content');
        }
    });
});
''')

    print("Patched collapsibles!")

if __name__ == "__main__":
    main()
