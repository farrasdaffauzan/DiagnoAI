const $ = (className) => {
  
    this.elms = document.getElementsByClassName(className);
  
    this.scale = (elm) => {
      if (elm.className.includes('scale')) {
        elm.classList.remove('scale');
      } else {
        elm.classList.add('scale')
      }
    }
  
    this.click = (animation) => {
      if (this.elms && this.elms.length && animation === 'toggle-scale') {
        for (let i = 0; i < this.elms.length; i++) {
          const elm = this.elms[i];
          elm.addEventListener('click', this.scale.bind(this, elm));
        }
      }
      // we can add another animation type handle here..
    }
  
    return this
}