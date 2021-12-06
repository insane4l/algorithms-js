function createMatrix(width, height) {

    // Create matrix
    let result = new Array(height).fill().map(() => new Array(width).fill(""));

    const maxNum = width * height;
    let num = 1;
    let x = 0;
    let y = 0;
    let lineX = width - 1;
    let lineY = height - 1;

    // Fill the matrix with numbers
    while (num <= maxNum) {
        // Top row from left to right numbers
        for (let i = x; i <= lineX; i++) {
            result[y][i] = num;
            num++;
        }
        y++;

        // Right column from top to bottom numbers
        for (let i = y; i <= lineY; i++) {
            result[i][lineX] = num;
            num++;
        }
        lineX--;

        // Bottom row from right to left numbers
        for (let i = lineX; i >= x; i--) {
            result[lineY][i] = num;
            num++;
        }
        lineY--;

        // Left column from bottom to top
        for (let i = lineY; i >= y; i--) {
            result[i][x] = num;
            num++;
        }
        x++;
    }

    return result;
}

console.log(createMatrix(7, 6));