import camelCase from 'lodash/camelCase';
export function buildActionTypes(types = []) {
    const actions = {};
    const actionTypes = {};
    types.forEach(fnType => {
        ['', '_SUCCESS', '_FAILURE'].forEach(type => {
            const typeName = fnType + type;
            actionTypes[typeName] = typeName;
            actions[camelCase(typeName)] = (payload) => (
                {
                    type: actionTypes[typeName],
                    payload
                }
            );
        })
    });

    return { ...actions, actionTypes }
}