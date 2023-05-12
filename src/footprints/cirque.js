module.exports = {
  params: {
    designator: 'TRACKPAD',
    orientation: 'down',
  },
  body: p => {
    const standard = `
      (module CIRQUE-TM040040 (layer F.Cu) (tedit 5B95C1BF)
        (attr smd)
        ${p.at /* parametric position */}
        (fp_text reference CIRQUE (at 0.12 -0.025 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text value VAL** (at 1.27 -5.735) (layer F.SilkS) hide
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user %R (at 0.145 0.325 90) (layer F.Fab)
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_circle (center 0 0) (end 21.93 0) (layer B.SilkS) (width 0.15))
        (fp_circle (center 0 0) (end 21.93 0) (layer F.SilkS) (width 0.15))
      )
        `
    function pins(def_neg, def_pos) {
      return `
      `
    }
    if(p.orientation == 'down') {
      return `
        ${standard}
        `
    } else {
      return `
        ${standard}
        `
    }
  }
}
