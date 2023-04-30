module.exports = {
    params: {
        reverseSilks: false,
        centerHole: false,
        northHole: true,
        westHole: true,
        southHole: true,
        eastHole: true,
    },
    body: (p) => {
        let wordParts;
        if (p.reverseSilks) {
            wordParts = ["puck", "tenting"];
        } else {
            wordParts = ["tenting", "puck"];
        }

        return `
(module "Tenting Puck" (layer F.Cu)
    (tedit 61E42322) (tstamp 00000000-0000-0000-0000-0000608b49d9)
    (at 92.456 86.995)
    (attr through_hole)
    (fp_text reference "REF**" (at 7.6835 1.4605) (layer "F.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
      (tstamp a7e28cb1-cb3c-449d-8b4d-355d52307fd5)
    )
    (fp_text value "Tenting Puck" (at 8.0645 -2.8575) (layer "F.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
      (tstamp 167a96f7-543f-46d7-bba9-17aaad2fef23)
    )
    (fp_arc (start 20.32 2.8575) (mid 19.91151 4.959786) (end 19.286134 7.008048) (layer "B.SilkS") (width 0.2) (tstamp 063da8b4-e778-43bc-a715-649aa2c48a9b))
    (fp_arc (start -1.128385 -10.735864) (mid -0.564967 -10.780206) (end 0 -10.795) (layer "B.SilkS") (width 0.2) (tstamp 0ec8b610-e8ca-41e3-974e-b1b517d158b9))
    (fp_arc (start -20.32 -2.8575) (mid -19.91151 -4.959784) (end -19.286136 -7.008044) (layer "B.SilkS") (width 0.2) (tstamp 18b0e42e-7ff7-4a46-a276-65fb62e0df78))
    (fp_arc (start 0 10.795) (mid -0.564967 10.780206) (end -1.128385 10.735864) (layer "B.SilkS") (width 0.2) (tstamp 586abcf7-5b0b-476c-b418-071162a52cd3))
    (fp_arc (start -7.008046 -19.286135) (mid -4.959785 -19.91151) (end -2.8575 -20.32) (layer "B.SilkS") (width 0.2) (tstamp 5df8896b-758e-4829-928b-02d8f453e40f))
    (fp_arc (start 1.128385 10.735864) (mid 0.564967 10.780206) (end 0 10.795) (layer "B.SilkS") (width 0.2) (tstamp 60032ec5-f43c-4a43-a21b-16afcb30191b))
    (fp_arc (start 7.008045 19.286135) (mid 4.959785 19.91151) (end 2.8575 20.32) (layer "B.SilkS") (width 0.2) (tstamp 6b187aef-6552-4571-967c-01b0438cae6d))
    (fp_arc (start -19.286135 7.008046) (mid -19.91151 4.959785) (end -20.32 2.8575) (layer "B.SilkS") (width 0.2) (tstamp abd613ef-056f-4d7e-8186-6812c2780f99))
    (fp_arc (start 19.286134 -7.008048) (mid 19.91151 -4.959786) (end 20.32 -2.8575) (layer "B.SilkS") (width 0.2) (tstamp abe30241-69a2-40eb-a78e-340010b9e68b))
    (fp_arc (start 2.8575 -20.32) (mid 4.959787 -19.91151) (end 7.008049 -19.286134) (layer "B.SilkS") (width 0.2) (tstamp c980fc4f-1b21-44ae-a311-90abe09e8079))
    (fp_arc (start 0 -10.795) (mid 0.564967 -10.780206) (end 1.128385 -10.735864) (layer "B.SilkS") (width 0.2) (tstamp e841262b-7c3c-47ed-9047-33d055ad0f71))
    (fp_arc (start -2.8575 20.32) (mid -4.959785 19.91151) (end -7.008045 19.286135) (layer "B.SilkS") (width 0.2) (tstamp ffdcdacf-dbee-4695-bb27-490161dc2c3f))
    (fp_poly (pts
        (xy 0.904718 0.554575)
        (xy 0.882015 0.577438)
        (xy 0.847536 0.612969)
        (xy 0.803267 0.659061)
        (xy 0.7512 0.713607)
        (xy 0.693321 0.774501)
        (xy 0.631622 0.839636)
        (xy 0.568089 0.906906)
        (xy 0.504714 0.974204)
        (xy 0.443484 1.039423)
        (xy 0.386388 1.100458)
        (xy 0.335416 1.155201)
        (xy 0.292556 1.201546)
        (xy 0.259798 1.237386)
        (xy 0.23913 1.260615)
        (xy 0.236837 1.263306)
        (xy 0.208536 1.296941)
        (xy 0.82855 1.296941)
        (xy 1.0019 1.120872)
        (xy 1.055642 1.066129)
        (xy 1.105925 1.014616)
        (xy 1.149741 0.969436)
        (xy 1.184087 0.93369)
        (xy 1.205955 0.910481)
        (xy 1.209132 0.906989)
        (xy 1.243014 0.869174)
        (xy 1.081979 0.70783)
        (xy 1.032266 0.658375)
        (xy 0.988042 0.61505)
        (xy 0.951895 0.580337)
        (xy 0.926413 0.556717)
        (xy 0.914184 0.546669)
        (xy 0.913653 0.546486)
        (xy 0.904718 0.554575)
      ) (layer "B.SilkS") (width 0.01) (fill solid) (tstamp 2a01879b-44e8-4a24-8917-2c66c065e29d))
    (fp_poly (pts
        (xy 1.711498 0.148044)
        (xy 0.908552 -0.654656)
        (xy 0.620184 -0.651562)
        (xy 0.331816 -0.648469)
        (xy 1.17904 0.211668)
        (xy 1.296965 0.331391)
        (xy 1.411764 0.44794)
        (xy 1.522218 0.56008)
        (xy 1.62711 0.666573)
        (xy 1.725222 0.766184)
        (xy 1.815337 0.857677)
        (xy 1.896236 0.939814)
        (xy 1.966703 1.011359)
        (xy 2.025519 1.071077)
        (xy 2.071466 1.117731)
        (xy 2.103327 1.150084)
        (xy 2.117108 1.16408)
        (xy 2.207952 1.256356)
        (xy 2.207952 -1.485514)
        (xy 1.711498 -1.485514)
        (xy 1.711498 0.148044)
      ) (layer "B.SilkS") (width 0.01) (fill solid) (tstamp f003d570-656a-478b-8c2b-07a54ed9c1ce))
    (fp_poly (pts
        (xy -0.493536 -0.986173)
        (xy -0.493728 -0.881933)
        (xy -0.494217 -0.785188)
        (xy -0.494967 -0.698302)
        (xy -0.495943 -0.62364)
        (xy -0.497112 -0.563565)
        (xy -0.498439 -0.520442)
        (xy -0.499888 -0.496635)
        (xy -0.500796 -0.492605)
        (xy -0.513227 -0.498919)
        (xy -0.538073 -0.515262)
        (xy -0.562207 -0.532464)
        (xy -0.676904 -0.603186)
        (xy -0.79912 -0.65229)
        (xy -0.929503 -0.679966)
        (xy -1.068704 -0.686404)
        (xy -1.086516 -0.685736)
        (xy -1.176151 -0.679184)
        (xy -1.252634 -0.667247)
        (xy -1.324286 -0.647755)
        (xy -1.399424 -0.618538)
        (xy -1.469275 -0.585899)
        (xy -1.597208 -0.510606)
        (xy -1.710128 -0.418626)
        (xy -1.807022 -0.311637)
        (xy -1.88688 -0.191312)
        (xy -1.94869 -0.059327)
        (xy -1.991442 0.082642)
        (xy -2.014123 0.232921)
        (xy -2.017684 0.322591)
        (xy -2.007393 0.475069)
        (xy -1.976037 0.619633)
        (xy -1.922892 0.758869)
        (xy -1.865637 0.865788)
        (xy -1.779925 0.986081)
        (xy -1.678312 1.09093)
        (xy -1.562979 1.179252)
        (xy -1.436104 1.249966)
        (xy -1.299868 1.301989)
        (xy -1.156449 1.334242)
        (xy -1.008028 1.345641)
        (xy -0.907782 1.341158)
        (xy -0.763174 1.316277)
        (xy -0.622606 1.270002)
        (xy -0.489433 1.204023)
        (xy -0.367013 1.120026)
        (xy -0.258701 1.0197)
        (xy -0.250307 1.010534)
        (xy -0.169176 0.906414)
        (xy -0.099484 0.788232)
        (xy -0.044318 0.662369)
        (xy -0.006765 0.535209)
        (xy 0.002104 0.488759)
        (xy 0.004717 0.460364)
        (xy 0.007062 0.410292)
        (xy 0.008531 0.359958)
        (xy -0.487807 0.359958)
        (xy -0.498379 0.457507)
        (xy -0.528811 0.551526)
        (xy -0.557465 0.605671)
        (xy -0.624399 0.693954)
        (xy -0.70388 0.764831)
        (xy -0.793312 0.817324)
        (xy -0.890098 0.850456)
        (xy -0.991639 0.86325)
        (xy -1.09534 0.854729)
        (xy -1.168167 0.835441)
        (xy -1.211164 0.819355)
        (xy -1.252069 0.801995)
        (xy -1.268236 0.794219)
        (xy -1.313522 0.763215)
        (xy -1.362845 0.717021)
        (xy -1.410902 0.661565)
        (xy -1.452387 0.602771)
        (xy -1.473875 0.564444)
        (xy -1.494056 0.520198)
        (xy -1.506701 0.48159)
        (xy -1.514058 0.439298)
        (xy -1.518376 0.383995)
        (xy -1.518658 0.378705)
        (xy -1.51529 0.27146)
        (xy -1.492434 0.173568)
        (xy -1.448782 0.080145)
        (xy -1.431012 0.051616)
        (xy -1.36647 -0.026288)
        (xy -1.287653 -0.088458)
        (xy -1.198017 -0.133954)
        (xy -1.101018 -0.161832)
        (xy -1.000114 -0.171152)
        (xy -0.898762 -0.16097)
        (xy -0.800416 -0.130345)
        (xy -0.786413 -0.124059)
        (xy -0.698461 -0.07111)
        (xy -0.624471 -0.002896)
        (xy -0.565428 0.07745)
        (xy -0.522315 0.166797)
        (xy -0.496113 0.26201)
        (xy -0.487807 0.359958)
        (xy 0.008531 0.359958)
        (xy 0.009115 0.339955)
        (xy 0.010854 0.250766)
        (xy 0.012257 0.144137)
        (xy 0.013301 0.021481)
        (xy 0.013965 -0.115791)
        (xy 0.014226 -0.266265)
        (xy 0.014229 -0.278001)
        (xy 0.014316 -0.969715)
        (xy -0.493388 -1.479741)
        (xy -0.493536 -0.986173)
      ) (layer "B.SilkS") (width 0.01) (fill solid) (tstamp fd51fbc1-9089-4fa7-b4fb-b887a93f7e98))
    (fp_arc (start 2.8575 -20.32) (mid 4.959786 -19.91151) (end 7.008047 -19.286134) (layer "F.SilkS") (width 0.2) (tstamp 02896235-4aa3-49fd-94e9-d634f4bb0d16))
    (fp_arc (start 0 -10.795) (mid 0.564967 -10.780206) (end 1.128385 -10.735864) (layer "F.SilkS") (width 0.2) (tstamp 0d93a09e-7bbe-4028-943a-a7c49d740db5))
    (fp_arc (start 0 10.795) (mid -0.564967 10.780206) (end -1.128385 10.735864) (layer "F.SilkS") (width 0.2) (tstamp 264d4247-1471-4c7f-a961-702c05e6919f))
    (fp_arc (start -19.286134 7.008047) (mid -19.91151 4.959786) (end -20.32 2.8575) (layer "F.SilkS") (width 0.2) (tstamp 30b717c8-c7bf-4153-b70d-f1e9b6441d3d))
    (fp_arc (start -7.008048 -19.286134) (mid -4.959786 -19.91151) (end -2.8575 -20.32) (layer "F.SilkS") (width 0.2) (tstamp 5b605340-77d2-44fd-85c8-f0ec73edf2b6))
    (fp_arc (start -2.8575 20.32) (mid -4.959785 19.91151) (end -7.008046 19.286135) (layer "F.SilkS") (width 0.2) (tstamp 60121611-b7e4-4b4c-8d64-cc1421ccfaca))
    (fp_arc (start 1.128385 10.735864) (mid 0.564967 10.780206) (end 0 10.795) (layer "F.SilkS") (width 0.2) (tstamp 92ede998-1ebd-4501-abee-d5b7f72a1ebe))
    (fp_arc (start -1.128385 -10.735864) (mid -0.564967 -10.780206) (end 0 -10.795) (layer "F.SilkS") (width 0.2) (tstamp a5646c42-43e5-4ca4-bfc7-444423c39157))
    (fp_arc (start 19.286135 -7.008045) (mid 19.91151 -4.959785) (end 20.32 -2.8575) (layer "F.SilkS") (width 0.2) (tstamp a83452df-2035-4c9a-8a72-52cf8a3033aa))
    (fp_arc (start -20.32 -2.8575) (mid -19.91151 -4.959786) (end -19.286134 -7.008048) (layer "F.SilkS") (width 0.2) (tstamp ac0ff3bb-07ab-467f-856f-104de803f638))
    (fp_arc (start 20.32 2.8575) (mid 19.91151 4.959785) (end 19.286135 7.008046) (layer "F.SilkS") (width 0.2) (tstamp bf111fb2-9bf3-4d93-89b5-85efd1cb0410))
    (fp_arc (start 7.008047 19.286134) (mid 4.959786 19.91151) (end 2.8575 20.32) (layer "F.SilkS") (width 0.2) (tstamp e1829bf4-b06c-41dd-99db-0a3d22acd0ee))
    (fp_poly (pts
        (xy 0.705279 -1.02235)
        (xy 0.705471 -0.91811)
        (xy 0.70596 -0.821365)
        (xy 0.70671 -0.734479)
        (xy 0.707686 -0.659817)
        (xy 0.708855 -0.599742)
        (xy 0.710182 -0.556619)
        (xy 0.711631 -0.532812)
        (xy 0.712539 -0.528782)
        (xy 0.72497 -0.535096)
        (xy 0.749816 -0.551439)
        (xy 0.77395 -0.568641)
        (xy 0.888647 -0.639363)
        (xy 1.010863 -0.688467)
        (xy 1.141246 -0.716143)
        (xy 1.280447 -0.722581)
        (xy 1.298259 -0.721913)
        (xy 1.387894 -0.715361)
        (xy 1.464377 -0.703424)
        (xy 1.536029 -0.683932)
        (xy 1.611167 -0.654715)
        (xy 1.681018 -0.622076)
        (xy 1.808951 -0.546783)
        (xy 1.921871 -0.454803)
        (xy 2.018765 -0.347814)
        (xy 2.098623 -0.227489)
        (xy 2.160433 -0.095504)
        (xy 2.203185 0.046465)
        (xy 2.225866 0.196744)
        (xy 2.229427 0.286414)
        (xy 2.219136 0.438892)
        (xy 2.18778 0.583456)
        (xy 2.134635 0.722692)
        (xy 2.07738 0.829611)
        (xy 1.991668 0.949904)
        (xy 1.890055 1.054753)
        (xy 1.774722 1.143075)
        (xy 1.647847 1.213789)
        (xy 1.511611 1.265812)
        (xy 1.368192 1.298065)
        (xy 1.219771 1.309464)
        (xy 1.119525 1.304981)
        (xy 0.974917 1.2801)
        (xy 0.834349 1.233825)
        (xy 0.701176 1.167846)
        (xy 0.578756 1.083849)
        (xy 0.470444 0.983523)
        (xy 0.46205 0.974357)
        (xy 0.380919 0.870237)
        (xy 0.311227 0.752055)
        (xy 0.256061 0.626192)
        (xy 0.218508 0.499032)
        (xy 0.209639 0.452582)
        (xy 0.207026 0.424187)
        (xy 0.204681 0.374115)
        (xy 0.203212 0.323781)
        (xy 0.69955 0.323781)
        (xy 0.710122 0.42133)
        (xy 0.740554 0.515349)
        (xy 0.769208 0.569494)
        (xy 0.836142 0.657777)
        (xy 0.915623 0.728654)
        (xy 1.005055 0.781147)
        (xy 1.101841 0.814279)
        (xy 1.203382 0.827073)
        (xy 1.307083 0.818552)
        (xy 1.37991 0.799264)
        (xy 1.422907 0.783178)
        (xy 1.463812 0.765818)
        (xy 1.479979 0.758042)
        (xy 1.525265 0.727038)
        (xy 1.574588 0.680844)
        (xy 1.622645 0.625388)
        (xy 1.66413 0.566594)
        (xy 1.685618 0.528267)
        (xy 1.705799 0.484021)
        (xy 1.718444 0.445413)
        (xy 1.725801 0.403121)
        (xy 1.730119 0.347818)
        (xy 1.730401 0.342528)
        (xy 1.727033 0.235283)
        (xy 1.704177 0.137391)
        (xy 1.660525 0.043968)
        (xy 1.642755 0.015439)
        (xy 1.578213 -0.062465)
        (xy 1.499396 -0.124635)
        (xy 1.40976 -0.170131)
        (xy 1.312761 -0.198009)
        (xy 1.211857 -0.207329)
        (xy 1.110505 -0.197147)
        (xy 1.012159 -0.166522)
        (xy 0.998156 -0.160236)
        (xy 0.910204 -0.107287)
        (xy 0.836214 -0.039073)
        (xy 0.777171 0.041273)
        (xy 0.734058 0.13062)
        (xy 0.707856 0.225833)
        (xy 0.69955 0.323781)
        (xy 0.203212 0.323781)
        (xy 0.202628 0.303778)
        (xy 0.200889 0.214589)
        (xy 0.199486 0.10796)
        (xy 0.198442 -0.014696)
        (xy 0.197778 -0.151968)
        (xy 0.197517 -0.302442)
        (xy 0.197514 -0.314178)
        (xy 0.197427 -1.005892)
        (xy 0.705131 -1.515918)
        (xy 0.705279 -1.02235)
      ) (layer "F.SilkS") (width 0.01) (fill solid) (tstamp 7ab9a827-a7ba-47c7-93ff-9df11440d0cb))
    (fp_poly (pts
        (xy -0.692975 0.518398)
        (xy -0.670272 0.541261)
        (xy -0.635793 0.576792)
        (xy -0.591524 0.622884)
        (xy -0.539457 0.67743)
        (xy -0.481578 0.738324)
        (xy -0.419879 0.803459)
        (xy -0.356346 0.870729)
        (xy -0.292971 0.938027)
        (xy -0.231741 1.003246)
        (xy -0.174645 1.064281)
        (xy -0.123673 1.119024)
        (xy -0.080813 1.165369)
        (xy -0.048055 1.201209)
        (xy -0.027387 1.224438)
        (xy -0.025094 1.227129)
        (xy 0.003207 1.260764)
        (xy -0.616807 1.260764)
        (xy -0.790157 1.084695)
        (xy -0.843899 1.029952)
        (xy -0.894182 0.978439)
        (xy -0.937998 0.933259)
        (xy -0.972344 0.897513)
        (xy -0.994212 0.874304)
        (xy -0.997389 0.870812)
        (xy -1.031271 0.832997)
        (xy -0.870236 0.671653)
        (xy -0.820523 0.622198)
        (xy -0.776299 0.578873)
        (xy -0.740152 0.54416)
        (xy -0.71467 0.52054)
        (xy -0.702441 0.510492)
        (xy -0.70191 0.510309)
        (xy -0.692975 0.518398)
      ) (layer "F.SilkS") (width 0.01) (fill solid) (tstamp d719e500-877e-40fe-8bbd-a47f2c552133))
    (fp_poly (pts
        (xy -1.499755 0.111867)
        (xy -0.696809 -0.690833)
        (xy -0.408441 -0.687739)
        (xy -0.120073 -0.684646)
        (xy -0.967297 0.175491)
        (xy -1.085222 0.295214)
        (xy -1.200021 0.411763)
        (xy -1.310475 0.523903)
        (xy -1.415367 0.630396)
        (xy -1.513479 0.730007)
        (xy -1.603594 0.8215)
        (xy -1.684493 0.903637)
        (xy -1.75496 0.975182)
        (xy -1.813776 1.0349)
        (xy -1.859723 1.081554)
        (xy -1.891584 1.113907)
        (xy -1.905365 1.127903)
        (xy -1.996209 1.220179)
        (xy -1.996209 -1.521691)
        (xy -1.499755 -1.521691)
        (xy -1.499755 0.111867)
      ) (layer "F.SilkS") (width 0.01) (fill solid) (tstamp ebccea35-c710-42cf-8323-cc7260220dbc))
    (fp_line (start -1.6 19.05) (end -1.6 -19.05) (layer "Cmts.User") (width 0.2) (tstamp 6682c9af-2b7c-447e-8d9f-28f987f93e4a))
    (fp_line (start 17.6 10) (end 17.6 -10) (layer "Cmts.User") (width 0.2) (tstamp 8f8482e5-57d6-45dd-9e40-1d2a7e32af3c))
    (fp_line (start 1.6 19.05) (end 1.6 -19.05) (layer "Cmts.User") (width 0.2) (tstamp cc2f6675-fb5d-4f53-a932-ccaf3812cd23))
    (fp_line (start -17.6 10) (end -17.6 -10) (layer "Cmts.User") (width 0.2) (tstamp f378ad71-1ff2-4911-b991-bb33e172eacf))
    (fp_circle (center 0 0) (end 20.55 0) (layer "B.CrtYd") (width 0.55) (fill none) (tstamp 9db7d662-3fe2-48c5-8e00-ddb266328b34))
    (pad "1" thru_hole circle locked (at -19.05 0) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask) (tstamp 26c1258f-b325-4655-8ce8-86434785af10))
    (pad "1" thru_hole circle locked (at 19.05 0) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask) (tstamp 8c2a95ec-bf49-4886-b0a3-0982fd89f4a6))
    (pad "1" thru_hole circle locked (at 0 -19.05) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask) (tstamp b3e70d94-c21b-4aad-ad01-7d1cba18354a))
    (pad "1" thru_hole circle locked (at 0 19.05) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask) (tstamp c8c90845-4c68-490c-ae50-ee02c3754c35))
  )
    `;
    },
};
