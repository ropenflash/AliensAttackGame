export const MOVE_OBJECTS = 'MOVE_OBJECTS'

export const moveObjects = mousePosition => {
    console.log('ACTION', mousePosition)
    return {
        type: MOVE_OBJECTS,
        mousePosition,
    }
}