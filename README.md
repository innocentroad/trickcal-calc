# Trickcal Damage Calculator

A high-precision damage and critical hit calculator for "Trickcal Revive".

## Features
- **Piecewise Rational Formula**: Implements exact game mechanics for base damage, crit rate, and crit multiplier.
- **Enemy Presets**: Automatically fill stats for common enemies (Lily, GTA bosses, etc.).
- **Physical/Magical Support**: Toggle between damage types to use appropriate defensive stats.
- **Crayon Comparison**: Simulate damage changes when upgrading crayons or artifacts.
- **Dynamic Graphing**: Visualize how damage scales with Atk or Def.

## How to Use
1. Enter your character's stats in the left panel.
2. Select an enemy preset or enter defender stats manually.
3. Use the "Additional %" section for status-based buffs or crit rate adjustments.
4. View the calculated damage and scaling graph in the right panel.

## Implementation Details
Based on extensive data analysis of game mechanics.
- **Base Damage**: 10/3 rational model.
- **Crit Rate**: 2x defensive penalty ratio with 80% cap.
- **Crit Multiplier**: High-precision piecewise model.

---
Developed by Antigravity AI.
