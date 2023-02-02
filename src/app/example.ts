type redirect = (url : string, pathMatch: string) => boolean;
function func22(r: redirect) {
    let a ='tt'
    let b ='sss'
}
function redirectImpl(a: string, b: string) {
    console.log(a + b);
    alert(a+b)
    return true;
}
func22(redirectImpl);
