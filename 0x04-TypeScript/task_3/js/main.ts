/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firsName: 'Guillaume',
  lastName: 'Slava',
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {...row, age: 23};

console.log(updatedRow);

CRUD.updateRow(newRowID, row);
CRUD.deleteRow(newRowID);