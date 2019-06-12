HTMLElement.prototype.prepend=function (element) {
    let firstChild=this.firstElementChild;
    if (firstChild) {
        this.insertBefore()
    }
}