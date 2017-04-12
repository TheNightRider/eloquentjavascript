function MultiplicatorUnitFailure() {

}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    while(1){
        try {
            return primitiveMultiply(a, b);
        } catch (e){
            if (!(e instanceof MultiplicatorUnitFailure))
                throw e;
        }
    }
}