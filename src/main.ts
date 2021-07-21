type Entity = {
    id: number;
    name: string;
};

export const func = () => {
    const entity: Entity = {
        id: 10,
        name: 'Fifirifi!',
    };

    return entity;
};
