module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'down',
    GND: {type: 'net', value: 'GND'},
    VCC: {type: 'net', value: 'VCC'},
    ST: {type: 'net', value: 'ST'},
    D3: {type: 'net', value: 'D3'},
    D1: {type: 'net', value: 'D1'},
    D2: {type: 'net', value: 'D2'},
    D0: {type: 'net', value: 'D0'},
    D4: {type: 'net', value: 'D4'},
    C6: {type: 'net', value: 'C6'},
    D7: {type: 'net', value: 'D7'},
    E6: {type: 'net', value: 'E6'},
    B4: {type: 'net', value: 'B4'},
    B5: {type: 'net', value: 'B5'},
    B7: {type: 'net', value: 'B7'},
    D5: {type: 'net', value: 'D5'},
    C7: {type: 'net', value: 'C7'},
    F1: {type: 'net', value: 'F1'},
    F0: {type: 'net', value: 'F0'},
    B6: {type: 'net', value: 'B6'},
    B2: {type: 'net', value: 'B2'},
    B3: {type: 'net', value: 'B3'},
    B1: {type: 'net', value: 'B1'},
    F7: {type: 'net', value: 'F7'},
    F6: {type: 'net', value: 'F6'},
    F5: {type: 'net', value: 'F5'},
    F4: {type: 'net', value: 'F4'},
    B0: {type: 'net', value: 'B0'},
  },
  body: p => {
    const standard = `
      (module Elite-C (layer F.Cu) (tedit 5BDF54F3)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 1.625) (layer F.SilkS) hide
          (effects (font (size 1.2 1.2) (thickness 0.2032)))
        )
        (fp_text value Elite-C (at 0 0) (layer F.SilkS) hide
          (effects (font (size 1.2 1.2) (thickness 0.2032)))
        )
        ${''/* illustration of the (possible) USB port overhang */}
        (fp_line (start -19.304 3.81) (end -19.304 -3.556) (layer Dwgs.User) (width 0.2))
        (fp_line (start -19.304 -3.556) (end -14.224 -3.556) (layer Dwgs.User) (width 0.2))
        (fp_line (start -14.224 -3.556) (end -14.224 3.81) (layer Dwgs.User) (width 0.2))
        (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.2))


        ${''/* component outline */}
        (fp_line (start -17.78 8.89) (end -15.24 8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start 15.24 -8.89) (end -15.24 -8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer F.SilkS) (width 0.381))

        `
    function pins(def_neg, def_pos) {
      return `
        (fp_line (start -15.24 6.35) (end -12.7 6.35) (layer F.SilkS) (width 0.381))
        (fp_line (start -15.24 -8.89) (end -17.78 -8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -15.24 8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -15.24 6.35) (end -15.24 8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -12.7 6.35) (end -12.7 8.89) (layer F.SilkS) (width 0.381))

        (fp_poly (pts (xy -9.36064 -4.931568) (xy -9.06064 -4.931568) (xy -9.06064 -4.831568) (xy -9.36064 -4.831568)) (layer F.SilkS) (width 0.15))
        (fp_poly (pts (xy -8.96064 -4.731568) (xy -8.86064 -4.731568) (xy -8.86064 -4.631568) (xy -8.96064 -4.631568)) (layer F.SilkS) (width 0.15))
        (fp_poly (pts (xy -9.36064 -4.931568) (xy -9.26064 -4.931568) (xy -9.26064 -4.431568) (xy -9.36064 -4.431568)) (layer F.SilkS) (width 0.15))
        (fp_poly (pts (xy -9.36064 -4.531568) (xy -8.56064 -4.531568) (xy -8.56064 -4.431568) (xy -9.36064 -4.431568)) (layer F.SilkS) (width 0.15))
        (fp_poly (pts (xy -8.76064 -4.931568) (xy -8.56064 -4.931568) (xy -8.56064 -4.831568) (xy -8.76064 -4.831568)) (layer F.SilkS) (width 0.15))

        (fp_text user B2 (at 11.43 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user F7 (at 3.81 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user F6 (at 1.27 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user F5 (at -1.27 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B0 (at -13.97 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -11.43 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user ST (at -8.92 ${def_neg}5.73312 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B1 (at 6.35 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VCC (at -6.35 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user F4 (at -3.81 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B3 (at 8.89 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B5 (at 12.7 ${def_pos}6.4 ${p.rot + 45}) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))))
        (fp_text user B4 (at 11.43 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user E6 (at 8.89 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user D7 (at 6.35 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C6 (at 3.81 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user D4 (at 1.27 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -8.89 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -6.35 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user D1 (at -3.81 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user D0 (at -1.27 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user D2 (at -11.43 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user TX0/D3 (at -13.97 ${def_pos}3.571872 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B7 (at 12.6 ${def_pos}4.5 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))))
        (fp_text user F0 (at 12.6 ${def_neg}4.5 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))))
        (fp_text user B6 (at 12.7 ${def_neg}6.4 135 unlocked) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))))
        (fp_text user C7 (at 12.4 0 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user F1 (at 12.4 ${def_neg}2.54 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user D5 (at 12.4 ${def_pos}2.54 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        (pad 1 thru_hole rect (at -13.97 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D3.str})
        (pad 2 thru_hole circle (at -11.43 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D2.str})
        (pad 3 thru_hole circle (at -8.89 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad 4 thru_hole circle (at -6.35 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad 5 thru_hole circle (at -3.81 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D1.str})
        (pad 6 thru_hole circle (at -1.27 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D0.str})
        (pad 7 thru_hole circle (at 1.27 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D4.str})
        (pad 8 thru_hole circle (at 3.81 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.C6.str})
        (pad 9 thru_hole circle (at 6.35 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D7.str})
        (pad 10 thru_hole circle (at 8.89 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.E6.str})
        (pad 11 thru_hole circle (at 11.43 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B4.str})
        (pad 12 thru_hole circle (at 13.97 ${def_pos}7.3914) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B5.str})
        (pad 13 thru_hole circle (at 13.97 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B6.str})
        (pad 14 thru_hole circle (at 11.43 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B2.str})
        (pad 15 thru_hole circle (at 8.89 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B3.str})
        (pad 16 thru_hole circle (at 6.35 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B1.str})
        (pad 17 thru_hole circle (at 3.81 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.F7.str})
        (pad 18 thru_hole circle (at 1.27 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.F6.str})
        (pad 19 thru_hole circle (at -1.27 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.F5.str})
        (pad 20 thru_hole circle (at -3.81 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.F4.str})
        (pad 21 thru_hole circle (at -6.35 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.VCC.str})
        (pad 22 thru_hole circle (at -8.89 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.ST.str})
        (pad 23 thru_hole circle (at -11.43 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad 24 thru_hole circle (at -13.97 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B0.str})
        (pad 25 thru_hole circle (at 13.97 ${def_pos}5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B7.str})
        (pad 26 thru_hole circle (at 13.97 ${def_pos}2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D5.str})
        (pad 27 thru_hole circle (at 13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.C7.str})
        (pad 28 thru_hole circle (at 13.97 ${def_neg}2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.F1.str})
        (pad 29 thru_hole circle (at 13.97 ${def_neg}5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.F0.str})
      `
    }
    if(p.orientation == 'down') {
      return `
        ${standard}
        ${pins('-', '')})
        `
    } else {
      return `
        ${standard}
        ${pins('', '-')})
        `
    }
  }
}
