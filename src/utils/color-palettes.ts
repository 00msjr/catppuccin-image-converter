
export interface CatppuccinColor {
  name: string;
  hex: string;
  rgb: [number, number, number];
  hsl: [number, number, number];
}

export interface CatppuccinPalette {
  name: string;
  key: string;
  colors: CatppuccinColor[];
}

export const lattePalette: CatppuccinPalette = {
  name: "Latte",
  key: "latte",
  colors: [
    { name: "Rosewater", hex: "#dc8a78", rgb: [220, 138, 120], hsl: [11, 59, 67] },
    { name: "Flamingo", hex: "#dd7878", rgb: [221, 120, 120], hsl: [0, 60, 67] },
    { name: "Pink", hex: "#ea76cb", rgb: [234, 118, 203], hsl: [316, 73, 69] },
    { name: "Mauve", hex: "#8839ef", rgb: [136, 57, 239], hsl: [266, 85, 58] },
    { name: "Red", hex: "#d20f39", rgb: [210, 15, 57], hsl: [347, 87, 44] },
    { name: "Maroon", hex: "#e64553", rgb: [230, 69, 83], hsl: [355, 76, 59] },
    { name: "Peach", hex: "#fe640b", rgb: [254, 100, 11], hsl: [22, 99, 52] },
    { name: "Yellow", hex: "#df8e1d", rgb: [223, 142, 29], hsl: [35, 77, 49] },
    { name: "Green", hex: "#40a02b", rgb: [64, 160, 43], hsl: [109, 58, 40] },
    { name: "Teal", hex: "#179299", rgb: [23, 146, 153], hsl: [183, 74, 35] },
    { name: "Sky", hex: "#04a5e5", rgb: [4, 165, 229], hsl: [197, 97, 46] },
    { name: "Sapphire", hex: "#209fb5", rgb: [32, 159, 181], hsl: [189, 70, 42] },
    { name: "Blue", hex: "#1e66f5", rgb: [30, 102, 245], hsl: [220, 91, 54] },
    { name: "Lavender", hex: "#7287fd", rgb: [114, 135, 253], hsl: [231, 97, 72] },
    { name: "Text", hex: "#4c4f69", rgb: [76, 79, 105], hsl: [234, 16, 35] },
    { name: "Subtext1", hex: "#5c5f77", rgb: [92, 95, 119], hsl: [233, 13, 41] },
    { name: "Subtext0", hex: "#6c6f85", rgb: [108, 111, 133], hsl: [233, 10, 47] },
    { name: "Overlay2", hex: "#7c7f93", rgb: [124, 127, 147], hsl: [232, 10, 53] },
    { name: "Overlay1", hex: "#8c8fa1", rgb: [140, 143, 161], hsl: [231, 10, 59] },
    { name: "Overlay0", hex: "#9ca0b0", rgb: [156, 160, 176], hsl: [228, 11, 65] },
    { name: "Surface2", hex: "#acb0be", rgb: [172, 176, 190], hsl: [227, 12, 71] },
    { name: "Surface1", hex: "#bcc0cc", rgb: [188, 192, 204], hsl: [225, 14, 77] },
    { name: "Surface0", hex: "#ccd0da", rgb: [204, 208, 218], hsl: [223, 16, 83] },
    { name: "Base", hex: "#eff1f5", rgb: [239, 241, 245], hsl: [220, 23, 95] },
    { name: "Mantle", hex: "#e6e9ef", rgb: [230, 233, 239], hsl: [220, 22, 92] },
    { name: "Crust", hex: "#dce0e8", rgb: [220, 224, 232], hsl: [220, 21, 89] },
  ],
};

export const frappePalette: CatppuccinPalette = {
  name: "Frappé",
  key: "frappe",
  colors: [
    { name: "Rosewater", hex: "#f2d5cf", rgb: [242, 213, 207], hsl: [10, 57, 88] },
    { name: "Flamingo", hex: "#eebebe", rgb: [238, 190, 190], hsl: [0, 59, 84] },
    { name: "Pink", hex: "#f4b8e4", rgb: [244, 184, 228], hsl: [316, 73, 84] },
    { name: "Mauve", hex: "#ca9ee6", rgb: [202, 158, 230], hsl: [277, 59, 76] },
    { name: "Red", hex: "#e78284", rgb: [231, 130, 132], hsl: [359, 68, 71] },
    { name: "Maroon", hex: "#ea999c", rgb: [234, 153, 156], hsl: [358, 66, 76] },
    { name: "Peach", hex: "#ef9f76", rgb: [239, 159, 118], hsl: [20, 79, 70] },
    { name: "Yellow", hex: "#e5c890", rgb: [229, 200, 144], hsl: [40, 62, 73] },
    { name: "Green", hex: "#a6d189", rgb: [166, 209, 137], hsl: [96, 44, 68] },
    { name: "Teal", hex: "#81c8be", rgb: [129, 200, 190], hsl: [172, 39, 65] },
    { name: "Sky", hex: "#99d1db", rgb: [153, 209, 219], hsl: [189, 48, 73] },
    { name: "Sapphire", hex: "#85c1dc", rgb: [133, 193, 220], hsl: [199, 55, 69] },
    { name: "Blue", hex: "#8caaee", rgb: [140, 170, 238], hsl: [222, 74, 74] },
    { name: "Lavender", hex: "#babbf1", rgb: [186, 187, 241], hsl: [239, 66, 84] },
    { name: "Text", hex: "#c6d0f5", rgb: [198, 208, 245], hsl: [227, 70, 87] },
    { name: "Subtext1", hex: "#b5bfe2", rgb: [181, 191, 226], hsl: [227, 44, 80] },
    { name: "Subtext0", hex: "#a5adce", rgb: [165, 173, 206], hsl: [228, 29, 73] },
    { name: "Overlay2", hex: "#949cbb", rgb: [148, 156, 187], hsl: [228, 22, 66] },
    { name: "Overlay1", hex: "#838ba7", rgb: [131, 139, 167], hsl: [227, 17, 58] },
    { name: "Overlay0", hex: "#737994", rgb: [115, 121, 148], hsl: [229, 13, 52] },
    { name: "Surface2", hex: "#626880", rgb: [98, 104, 128], hsl: [228, 13, 44] },
    { name: "Surface1", hex: "#51576d", rgb: [81, 87, 109], hsl: [227, 15, 37] },
    { name: "Surface0", hex: "#414559", rgb: [65, 69, 89], hsl: [230, 16, 30] },
    { name: "Base", hex: "#303446", rgb: [48, 52, 70], hsl: [229, 19, 23] },
    { name: "Mantle", hex: "#292c3c", rgb: [41, 44, 60], hsl: [231, 19, 20] },
    { name: "Crust", hex: "#232634", rgb: [35, 38, 52], hsl: [229, 20, 17] },
  ],
};

export const macchiatoPalette: CatppuccinPalette = {
  name: "Macchiato",
  key: "macchiato",
  colors: [
    { name: "Rosewater", hex: "#f4dbd6", rgb: [244, 219, 214], hsl: [10, 58, 90] },
    { name: "Flamingo", hex: "#f0c6c6", rgb: [240, 198, 198], hsl: [0, 58, 86] },
    { name: "Pink", hex: "#f5bde6", rgb: [245, 189, 230], hsl: [316, 74, 85] },
    { name: "Mauve", hex: "#c6a0f6", rgb: [198, 160, 246], hsl: [267, 83, 80] },
    { name: "Red", hex: "#ed8796", rgb: [237, 135, 150], hsl: [351, 74, 73] },
    { name: "Maroon", hex: "#ee99a0", rgb: [238, 153, 160], hsl: [355, 71, 77] },
    { name: "Peach", hex: "#f5a97f", rgb: [245, 169, 127], hsl: [21, 86, 73] },
    { name: "Yellow", hex: "#eed49f", rgb: [238, 212, 159], hsl: [40, 70, 78] },
    { name: "Green", hex: "#a6da95", rgb: [166, 218, 149], hsl: [105, 48, 72] },
    { name: "Teal", hex: "#8bd5ca", rgb: [139, 213, 202], hsl: [171, 47, 69] },
    { name: "Sky", hex: "#91d7e3", rgb: [145, 215, 227], hsl: [189, 59, 73] },
    { name: "Sapphire", hex: "#7dc4e4", rgb: [125, 196, 228], hsl: [199, 66, 69] },
    { name: "Blue", hex: "#8aadf4", rgb: [138, 173, 244], hsl: [220, 83, 75] },
    { name: "Lavender", hex: "#b7bdf8", rgb: [183, 189, 248], hsl: [234, 82, 85] },
    { name: "Text", hex: "#cad3f5", rgb: [202, 211, 245], hsl: [227, 68, 88] },
    { name: "Subtext1", hex: "#b8c0e0", rgb: [184, 192, 224], hsl: [228, 39, 80] },
    { name: "Subtext0", hex: "#a5adcb", rgb: [165, 173, 203], hsl: [227, 27, 72] },
    { name: "Overlay2", hex: "#939ab7", rgb: [147, 154, 183], hsl: [228, 20, 65] },
    { name: "Overlay1", hex: "#8087a2", rgb: [128, 135, 162], hsl: [228, 15, 57] },
    { name: "Overlay0", hex: "#6e738d", rgb: [110, 115, 141], hsl: [230, 12, 49] },
    { name: "Surface2", hex: "#5b6078", rgb: [91, 96, 120], hsl: [230, 14, 41] },
    { name: "Surface1", hex: "#494d64", rgb: [73, 77, 100], hsl: [231, 16, 34] },
    { name: "Surface0", hex: "#363a4f", rgb: [54, 58, 79], hsl: [230, 19, 26] },
    { name: "Base", hex: "#24273a", rgb: [36, 39, 58], hsl: [232, 23, 18] },
    { name: "Mantle", hex: "#1e2030", rgb: [30, 32, 48], hsl: [233, 23, 15] },
    { name: "Crust", hex: "#181926", rgb: [24, 25, 38], hsl: [236, 23, 12] },
  ],
};

export const mochaPalette: CatppuccinPalette = {
  name: "Mocha",
  key: "mocha",
  colors: [
    { name: "Rosewater", hex: "#f5e0dc", rgb: [245, 224, 220], hsl: [10, 56, 91] },
    { name: "Flamingo", hex: "#f2cdcd", rgb: [242, 205, 205], hsl: [0, 59, 88] },
    { name: "Pink", hex: "#f5c2e7", rgb: [245, 194, 231], hsl: [316, 72, 86] },
    { name: "Mauve", hex: "#cba6f7", rgb: [203, 166, 247], hsl: [267, 84, 81] },
    { name: "Red", hex: "#f38ba8", rgb: [243, 139, 168], hsl: [343, 81, 75] },
    { name: "Maroon", hex: "#eba0ac", rgb: [235, 160, 172], hsl: [350, 65, 77] },
    { name: "Peach", hex: "#fab387", rgb: [250, 179, 135], hsl: [23, 92, 75] },
    { name: "Yellow", hex: "#f9e2af", rgb: [249, 226, 175], hsl: [41, 86, 83] },
    { name: "Green", hex: "#a6e3a1", rgb: [166, 227, 161], hsl: [115, 54, 76] },
    { name: "Teal", hex: "#94e2d5", rgb: [148, 226, 213], hsl: [170, 57, 73] },
    { name: "Sky", hex: "#89dceb", rgb: [137, 220, 235], hsl: [189, 71, 73] },
    { name: "Sapphire", hex: "#74c7ec", rgb: [116, 199, 236], hsl: [199, 76, 69] },
    { name: "Blue", hex: "#89b4fa", rgb: [137, 180, 250], hsl: [217, 92, 76] },
    { name: "Lavender", hex: "#b4befe", rgb: [180, 190, 254], hsl: [232, 97, 85] },
    { name: "Text", hex: "#cdd6f4", rgb: [205, 214, 244], hsl: [226, 64, 88] },
    { name: "Subtext1", hex: "#bac2de", rgb: [186, 194, 222], hsl: [227, 35, 80] },
    { name: "Subtext0", hex: "#a6adc8", rgb: [166, 173, 200], hsl: [228, 24, 72] },
    { name: "Overlay2", hex: "#9399b2", rgb: [147, 153, 178], hsl: [228, 17, 64] },
    { name: "Overlay1", hex: "#7f849c", rgb: [127, 132, 156], hsl: [230, 13, 55] },
    { name: "Overlay0", hex: "#6c7086", rgb: [108, 112, 134], hsl: [231, 11, 47] },
    { name: "Surface2", hex: "#585b70", rgb: [88, 91, 112], hsl: [233, 12, 39] },
    { name: "Surface1", hex: "#45475a", rgb: [69, 71, 90], hsl: [234, 13, 31] },
    { name: "Surface0", hex: "#313244", rgb: [49, 50, 68], hsl: [237, 16, 23] },
    { name: "Base", hex: "#1e1e2e", rgb: [30, 30, 46], hsl: [240, 21, 15] },
    { name: "Mantle", hex: "#181825", rgb: [24, 24, 37], hsl: [240, 21, 12] },
    { name: "Crust", hex: "#11111b", rgb: [17, 17, 27], hsl: [240, 23, 9] },
  ],
};

export const allPalettes: CatppuccinPalette[] = [
  lattePalette,
  frappePalette,
  macchiatoPalette,
  mochaPalette
];
