module.exports = {
    params: {
        class: 'HOLE',
    },
    body: p => `
    (module "MountingHole_2.2mm_M2_Pad_Via" (version 20210722) (generator pcbnew) (layer "F.Cu")
      (tedit 0) (tstamp 1bc1aad1-16a8-4fe1-b0de-a815897ee0c3)
      ${p.at /* parametric position */} 
      (fp_text reference "${p.ref}" (at 0 -3.2) (layer "F.SilkS") ${p.ref_hide} 
        (effects (font (size 1 1) (thickness 0.15)))
        (tstamp b68bb25c-687d-44b1-b966-dad4cac66b35)
      )
      (pad "" thru_hole circle locked (at 0 0) (size 4 4) (drill 2.2) (layers F&B.Cu *.Mask "Dwgs.User") (tstamp effd62d4-c156-452f-9c0d-4ac994e9a750))
    )`
}
