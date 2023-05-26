module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'down',
    IO10: {type: 'net', value: 'IO10'},
    TX: {type: 'net', value: 'TX'},
    RX: {type: 'net', value: 'RX'},
    GND: {type: 'net', value: 'GND'},
    IO2: {type: 'net', value: 'IO2'},
    IO3: {type: 'net', value: 'IO3'},
    IO4: {type: 'net', value: 'IO4'},
    IO5: {type: 'net', value: 'IO5'},
    IO6: {type: 'net', value: 'IO6'},
    IO7: {type: 'net', value: 'IO7'},
    IO8: {type: 'net', value: 'IO8'},
    IO9: {type: 'net', value: 'IO9'},
    IO12: {type: 'net', value: 'IO12'},
    IO13: {type: 'net', value: 'IO13'},
    IO14: {type: 'net', value: 'IO14'},
    IO15: {type: 'net', value: 'IO15'},
    IO16: {type: 'net', value: 'IO16'},
    IO21: {type: 'net', value: 'IO21'},
    IO23: {type: 'net', value: 'IO23'},
    IO20: {type: 'net', value: 'IO20'},
    IO22: {type: 'net', value: 'IO22'},
    A0: {type: 'net', value: 'A0'},
    A1: {type: 'net', value: 'A1'},
    A2: {type: 'net', value: 'A2'},
    A3: {type: 'net', value: 'A3'},
    VCC: {type: 'net', value: 'VCC'},
    RAW: {type: 'net', value: 'RAW'},
    RST: {type: 'net', value: 'RST'},
    IO11: {type: 'net', value: 'IO11'},
    RGB: {type: 'net', value: 'RGB'},
    Dminus: {type: 'net', value: 'Dminus'},
    Dplus: {type: 'net', value: 'Dplus'},
  },
  body: p => {
    const standard = `
      (module Helios (layer F.Cu) (tedit 5BDF54F3)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 1.625) (layer F.SilkS) hide
          (effects (font (size 1.2 1.2) (thickness 0.2032)))
        )
        (fp_text value Elite-C (at 0 0) (layer F.SilkS) hide
          (effects (font (size 1.2 1.2) (thickness 0.2032)))
        )
        ${''/* illustration of the (possible) USB port overhang */}
        (fp_line (start -3.81 -14.224) (end -3.81 -19.304) (layer "F.Fab") (tstamp e00a2090-a93e-4f46-900c-97460e0bd5d9))
        (fp_line (start -8.89 -17.78) (end -8.89 15.24) (layer "F.Fab") (tstamp 1f20047f-b1ec-4afa-8e23-7b3bb1aebe18))
        (fp_line (start -8.89 15.24) (end 8.89 15.24) (layer "F.Fab") (tstamp bd797faf-b9f7-49d1-b70c-b00d4bb0a098))
        (fp_line (start -3.81 -19.304) (end 3.556 -19.304) (layer "F.Fab") (tstamp 2db75b18-7dde-4541-920f-a7c89a9a3a5b))
        (fp_line (start 3.556 -19.304) (end 3.556 -14.224) (layer "F.Fab") (tstamp 87b578fb-057b-425e-8f85-2db707770bb6))
        (fp_line (start 3.556 -14.224) (end -3.81 -14.224) (layer "F.Fab") (tstamp 174153c9-9391-46e9-a42a-d61f8fc1aa81))
        (fp_line (start 8.89 -17.78) (end -8.89 -17.78) (layer "F.Fab") (tstamp ed8ac6e9-c180-4c37-b407-2d38fc1d864d))
        (fp_line (start 8.89 15.24) (end 8.89 -17.78)  (layer "F.Fab") (tstamp 7546fd9a-8686-4e2f-8b57-3d1d66c5e6e6))
        `
    function pins(def_neg, def_pos) {
      return `
        (pad "1" thru_hole circle (at -7.62 ${def_neg}16.51 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO10.str})
        (pad "2" thru_hole circle (at -7.62 ${def_neg}13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.TX.str})
        (pad "3" thru_hole circle (at -7.62 ${def_neg}11.43 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.RX.str})
        (pad "4" thru_hole roundrect (at -7.62 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GND.str})
        (pad "5" thru_hole roundrect (at -7.62 ${def_neg}6.35 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GND.str})
        (pad "6" thru_hole circle (at -7.62 ${def_neg}3.81 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO2.str})
        (pad "7" thru_hole circle (at -7.62 ${def_neg}1.27 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO3.str})
        (pad "8" thru_hole circle (at -7.62 ${def_pos}1.27 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO4.str})
        (pad "9" thru_hole circle (at -7.62 ${def_pos}3.81 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO5.str})
        (pad "10" thru_hole circle (at -7.62 ${def_pos}6.35 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO6.str})
        (pad "11" thru_hole circle (at -7.62 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO7.str})
        (pad "12" thru_hole circle (at -7.62 ${def_pos}11.43 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO8.str})
        (pad "13" thru_hole circle (at -7.62 ${def_pos}13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO9.str})
        (pad "14" thru_hole circle (at -5.08 ${def_pos}13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO12.str})
        (pad "15" thru_hole circle (at -2.54 ${def_pos}13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO13.str})
        (pad "16" thru_hole circle (at 0 ${def_pos}13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO14.str})
        (pad "17" thru_hole circle (at 2.54 ${def_pos}13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO15.str})
        (pad "18" thru_hole circle (at 5.08 ${def_pos}13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO16.str})
        (pad "19" thru_hole circle (at 7.62 ${def_pos}13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO21.str})
        (pad "20" thru_hole circle (at 7.62 ${def_pos}11.43 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO23.str})
        (pad "21" thru_hole circle (at 7.62 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO20.str})
        (pad "22" thru_hole circle (at 7.62 ${def_pos}6.35 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO22.str})
        (pad "23" thru_hole circle (at 7.62 ${def_pos}3.81 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.A0.str})
        (pad "24" thru_hole circle (at 7.62 ${def_pos}1.27 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.A1.str})
        (pad "25" thru_hole circle (at 7.62 ${def_neg}1.27 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.A2.str})
        (pad "26" thru_hole circle (at 7.62 ${def_neg}3.81 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.A3.str})
        (pad "27" thru_hole circle (at 7.62 ${def_neg}6.35 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.VCC.str})
        (pad "28" thru_hole circle (at 7.62 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.RST.str})
        (pad "29" thru_hole roundrect (at 7.62 ${def_neg}11.43 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${p.GND.str})
        (pad "30" thru_hole circle (at 7.62 ${def_neg}13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.RAW.str})
        (pad "31" thru_hole circle (at 7.62 ${def_neg}16.51 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.IO11.str})
        (pad "32" thru_hole circle (at -5.075 ${def_pos}11.43 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.RGB.str})
        (pad "33" thru_hole circle (at 1.27 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.Dminus.str})
        (pad "34" thru_hole circle (at -1.27 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.Dplus.str})

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
