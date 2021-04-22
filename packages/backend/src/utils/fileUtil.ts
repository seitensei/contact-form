import { appendFile } from "fs/promises";
import { PathLike } from "node:fs";

import path from "path";

export const AppendToFile = (filePath: PathLike, data: string) => {
    return appendFile(filePath, data + '\n', 'utf-8');
}