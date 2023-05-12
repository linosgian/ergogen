module.exports = {
    params: {
        designator: 'TRACKPAD',
        T1: {type: 'net', value: 'T1'},
        T2: {type: 'net', value: 'T2'},
        T3: {type: 'net', value: 'T3'},
        T4: {type: 'net', value: 'T4'},
    },
    body: p => {
        return `
        (module pinheaders (layer F.Cu) (tedit 5B24D78E)
          (tedit 628CE864) (tstamp 1efff5fe-2b01-4e4c-b5f2-aa0ee4dd6ea7)
          (descr "Through hole straight pin header, 1x04, 2.54mm pitch, single row")
          (tags "Through hole pin header THT 1x04 2.54mm single row")
          (attr through_hole)
          ${p.at /* parametric position */}
          (fp_text reference "O2" (at 0 -2.33 90) (layer "F.SilkS") hide
            (effects (font (size 1 1) (thickness 0.15)))
            (tstamp b2d8b077-0ef5-4976-8c43-94f82f739557)
          )
          (fp_text value "TRACKPAD" (at 0 9.95 90) (layer "F.Fab")
            (effects (font (size 1 1) (thickness 0.15)))
            (tstamp 958b8bac-d1d9-4252-8212-dcdf748915a1)
          )
          (fp_text user "f" (at 0 3.81) (layer "F.Fab")
            (effects (font (size 1 1) (thickness 0.15)))
            (tstamp 60ab1b62-1793-46e3-a076-58083080b5c3)
          )
          (fp_line (start 1.33 -1.237931) (end 1.33 8.95) (layer "B.SilkS") (width 0.12) (tstamp 483cb6a4-3662-4f33-adeb-adf89e808e59))
          (fp_line (start -1.33 -1.237931) (end -1.33 8.95) (layer "B.SilkS") (width 0.12) (tstamp ab816942-ca37-4395-8381-87b62ed341fa))
          (fp_line (start 1.33 -1.237931) (end -1.33 -1.237931) (layer "B.SilkS") (width 0.12) (tstamp cf2f72f5-9178-4747-8669-901eae7371bb))
          (fp_line (start 1.33 8.95) (end -1.33 8.95) (layer "B.SilkS") (width 0.12) (tstamp dc5f8b81-309c-4d7b-8e71-29f566fb09ff))
          (fp_line (start -1.33 8.95) (end 1.33 8.95) (layer "F.SilkS") (width 0.12) (tstamp 66260360-aae7-4aa0-a560-6bf1f6bd738b))
          (fp_line (start -1.33 -1.237931) (end 1.33 -1.237931) (layer "F.SilkS") (width 0.12) (tstamp 76f7c7ab-dfa5-44a2-b584-658a178238c1))
          (fp_line (start -1.33 -1.237931) (end -1.33 8.95) (layer "F.SilkS") (width 0.12) (tstamp 8a7e3f85-d181-4dc3-be8c-d400d5ca27f9))
          (fp_line (start 1.33 -1.237931) (end 1.33 8.95) (layer "F.SilkS") (width 0.12) (tstamp a2438210-b3c2-428f-8f86-eff8ad00d60d))
          (fp_line (start 1.8 9.4) (end 1.8 -1.8) (layer "F.CrtYd") (width 0.05) (tstamp 57a3982d-c0e9-48d5-9895-7a48fcca39bf))
          (fp_line (start 1.8 -1.8) (end -1.8 -1.8) (layer "F.CrtYd") (width 0.05) (tstamp 81c41b1f-3647-4962-a5f7-8a05582281bc))
          (fp_line (start -1.8 -1.8) (end -1.8 9.4) (layer "F.CrtYd") (width 0.05) (tstamp 9b1362e3-cf83-4dc9-aba7-f0dfaa790508))
          (fp_line (start -1.8 9.4) (end 1.8 9.4) (layer "F.CrtYd") (width 0.05) (tstamp e7a8c094-1bd4-4d65-9a8a-803df894f75e))
          (fp_line (start -1.27 8.89) (end -1.27 -0.635) (layer "F.Fab") (width 0.1) (tstamp 3e844eb7-a5ab-4d57-a6f7-4656c5d60608))
          (fp_line (start 1.27 8.89) (end -1.27 8.89) (layer "F.Fab") (width 0.1) (tstamp 421c8b6c-68a4-49a4-b660-263275af431a))
          (fp_line (start -1.27 -0.635) (end -0.635 -1.27) (layer "F.Fab") (width 0.1) (tstamp 67fda6d2-db34-4f1f-9cf5-f519fe562d62))
          (fp_line (start -0.635 -1.27) (end 1.27 -1.27) (layer "F.Fab") (width 0.1) (tstamp c85cd273-391a-47f2-aa3a-254b54010f9a))
          (fp_line (start 1.27 -1.27) (end 1.27 8.89) (layer "F.Fab") (width 0.1) (tstamp fbb29eb5-6513-42a4-820f-96a237008ee2))
          (pad "1" thru_hole rect locked (at 0 0 180) (size 1.7 1.7) (drill 1) (layers F&B.Cu *.Mask) ${p.T1.str})
          (pad "2" thru_hole oval locked (at 0 2.54 180) (size 1.7 1.7) (drill 1) (layers F&B.Cu *.Mask) ${p.T2.str})
          (pad "3" thru_hole oval locked (at 0 5.08 180) (size 1.7 1.7) (drill 1) (layers F&B.Cu *.Mask)${p.T3.str})
          (pad "4" thru_hole oval locked (at 0 7.62 180) (size 1.7 1.7) (drill 1) (layers F&B.Cu *.Mask)${p.T4.str})
          )
        `
    }
}
