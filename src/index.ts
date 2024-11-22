const bindMethods = (instance: Record<string, unknown>) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(instance)).forEach((key) => {
    instance[key] =
      typeof instance[key] === "function"
        ? instance[key].bind(instance)
        : instance[key];
  });
};

type FactoryActivator<ClassType extends new (...args: any[]) => any> = {
  new (): InstanceType<ClassType>;
} & Omit<ClassType, "prototype">;

export const factory =
  <ClassType extends new (...args: any[]) => any>(ClassCtor: ClassType) =>
  (...args: ConstructorParameters<ClassType>): FactoryActivator<ClassType> => {
    function FactoryClass() {
      const self = new ClassCtor(...args);
      bindMethods(self);
      return self;
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
