// ここからコードを書いてください
export function setupConverter(){
    const form = document.getElementsByClassName('converter-form');
    const input = document.getElementsByClassName('converter-input');
    const selectFrom = document.getElementsByClassName('converter-from');
    const selectTo = document.getElementsByClassName('converter-to');
    const result = document.getElementsByClassName('converter-result');

    const lengthUnit = [
        { name: "meter", base: 1 },
        { name: "kilometer", base: 1000 },
        { name: "centimeter", base: 0.01 },
        { name: "millimeter", base: 0.001 },
        { name: "inch", base: 0.0254 }, 
        { name: "foot", base: 0.3048 },
        { name: "yard", base: 0.9144 },
        { name: "mile", base: 1609.344 }
    ];

    const lengthOption = document.createElement('option');
    lengthOption.value = lengthUnit.base;
    lengthOption.text = lengthUnit.name;

    selectFrom.appendChild(lengthOption);
    selectTo.appendChild(lengthOption);

    selectedIndex.selectFrom('meter');
    selectedIndex.selectTo('kilometer');


}
