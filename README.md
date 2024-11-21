# di-factory

> The generic repository pattern implementation for NodeJS, aka `BaseCRUD`

## Usage

```tsx
import { factory } from 'di-factory';

const Basecrud = factory(
  class {
    constructor(public name: string, public collectionId: string) {}
    
    getName = () => this.name;

    getCollectionId = () => this.collectionId;
  }
);

class TestCrud extends Basecrud("test-crud", "collection-uuid") {}

const testCrud = new TestCrud();

console.log(testCrud.getName()); // test-crud
```

## See also

If you looking for integrated DI container for basecrud services instantiation, take a look on [di-kit npm package](https://www.npmjs.com/package/di-kit)

