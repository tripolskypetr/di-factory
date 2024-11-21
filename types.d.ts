type FactoryActivator<ClassType extends new (...args: any[]) => any> = {
    new (): InstanceType<ClassType>;
} & Omit<ClassType, "prototype">;
declare const factory: <ClassType extends new (...args: any[]) => any>(ClassCtor: ClassType) => (...args: ConstructorParameters<ClassType>) => FactoryActivator<ClassType>;

export { factory };
