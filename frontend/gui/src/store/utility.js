export const updateObject = (oldObject, updatedProperties) => {
    return{
        ...oldObject, //with ... we get al the parameters of oldObject
        ...updatedProperties
    }
}