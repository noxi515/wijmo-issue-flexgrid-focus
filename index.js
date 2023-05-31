import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';

const gridHostElement = document.querySelector('#grid');

const items = [{}, {}];
const collectionView = new CollectionView(items, {
  getError: () => null,
});

const grid = new FlexGrid(gridHostElement, {
  itemsSource: collectionView,
  validateEdits: false,
  columns: [
    { binding: 'prop1', header: 'Prop1', dataType: 'String' },
    { binding: 'prop2', header: 'Prop2', dataType: 'Number' },
    { binding: 'prop3', header: 'Prop3', dataType: 'String' },
    { binding: 'prop4', header: 'Prop4', dataType: 'String' }
  ]
});