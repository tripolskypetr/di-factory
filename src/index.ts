type FactoryActivator<ClassType extends new (...args: any[]) => any> = {
  new (): InstanceType<ClassType>;
} & Omit<ClassType, "prototype">;

export const factory =
  <ClassType extends new (...args: any[]) => any>(ClassCtor: ClassType) =>
  (...args: ConstructorParameters<ClassType>): FactoryActivator<ClassType> => {
    class FactoryClass {
      constructor() {
        Object.setPrototypeOf(this, new ClassCtor(...args));
      }
    }
    return FactoryClass as unknown as FactoryActivator<ClassType>;
  };

/*

const Basecrud = factory(
  class {
    constructor(public name: string, public collectionId: string) {}
    
    getName = () => this.name;

    getCollectionId = () => this.collectionId;
  }
);

class TestCrud extends Basecrud("test-crud", "collection-uuid") {}

const testCrud = new TestCrud();

console.log(testCrud.getName());

*/
