/* module 23017 — 10829 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(98095),
    i = r(30803),
    o = r(70224);
  class s {
    getForZSpec() {
      return [{
        id: "id1",
        shortcut: {
          type: "char-sequence",
          sequence: "->"
        },
        textModeLine: o.A.createPureTextLine("→"),
        mathModeLine: o.A.createPureTextLine("→")
      }, {
        id: "id4",
        shortcut: {
          type: "char-sequence",
          sequence: "=>"
        },
        textModeLine: o.A.createPureTextLine("⇒"),
        mathModeLine: o.A.createPureTextLine("⇒")
      }, {
        id: "id5",
        shortcut: {
          type: "char-sequence",
          sequence: ">="
        },
        textModeLine: o.A.createPureTextLine("≥"),
        mathModeLine: o.A.createPureTextLine("≥")
      }, {
        id: "id6",
        shortcut: {
          type: "char-sequence",
          sequence: "<="
        },
        textModeLine: o.A.createPureTextLine("≤"),
        mathModeLine: o.A.createPureTextLine("≤")
      }, {
        id: "id7",
        shortcut: {
          type: "char-sequence",
          sequence: "=/"
        },
        textModeLine: o.A.createPureTextLine("≠"),
        mathModeLine: o.A.createPureTextLine("≠")
      }, {
        id: "id7",
        shortcut: {
          type: "char-sequence",
          sequence: "@"
        },
        textModeLine: o.A.createPureTextLine("•"),
        mathModeLine: o.A.createPureTextLine("•")
      }, {
        id: "id8",
        shortcut: {
          type: "char-sequence",
          sequence: "if ",
          startAtLineOrWhiteSpace: !0
        },
        textModeLine: null,
        mathModeLine: {
          id: i.w.nextId(),
          blocks: [{
            id: i.w.nextId(),
            text: "if",
            style: {
              mathType: "\\mathbf"
            }
          }, {
            id: i.w.nextId(),
            text: " "
          }]
        }
      }, {
        id: "id9",
        shortcut: {
          type: "char-sequence",
          sequence: "else ",
          startAtLineOrWhiteSpace: !0
        },
        textModeLine: null,
        mathModeLine: {
          id: i.w.nextId(),
          blocks: [{
            id: i.w.nextId(),
            text: "else",
            style: {
              mathType: "\\mathbf"
            }
          }, {
            id: i.w.nextId(),
            text: " "
          }]
        }
      }, {
        id: "id10",
        shortcut: {
          type: "char-sequence",
          sequence: "then ",
          startAtLineOrWhiteSpace: !0
        },
        textModeLine: null,
        mathModeLine: {
          id: i.w.nextId(),
          blocks: [{
            id: i.w.nextId(),
            text: "then",
            style: {
              mathType: "\\mathbf"
            }
          }, {
            id: i.w.nextId(),
            text: " "
          }]
        }
      }, {
        id: "id11",
        shortcut: {
          type: "char-sequence",
          sequence: "let ",
          startAtLineOrWhiteSpace: !0
        },
        textModeLine: null,
        mathModeLine: {
          id: i.w.nextId(),
          blocks: [{
            id: i.w.nextId(),
            text: "let",
            style: {
              mathType: "\\mathbf"
            }
          }, {
            id: i.w.nextId(),
            text: " "
          }]
        }
      }, {
        id: "id12",
        shortcut: {
          type: "char-sequence",
          sequence: " mod "
        },
        textModeLine: null,
        mathModeLine: {
          id: i.w.nextId(),
          blocks: [{
            id: i.w.nextId(),
            text: " "
          }, {
            id: i.w.nextId(),
            text: "mod",
            style: {
              mathType: "\\mathrm"
            }
          }, {
            id: i.w.nextId(),
            text: " "
          }]
        }
      }, {
        id: "id13",
        shortcut: {
          type: "char-sequence",
          sequence: " div "
        },
        textModeLine: null,
        mathModeLine: {
          id: i.w.nextId(),
          blocks: [{
            id: i.w.nextId(),
            text: " "
          }, {
            id: i.w.nextId(),
            text: "div",
            style: {
              mathType: "\\mathrm"
            }
          }, {
            id: i.w.nextId(),
            text: " "
          }]
        }
      }];
    }
    get() {
      return [{
        id: "id1",
        shortcut: {
          type: "char-sequence",
          sequence: "->"
        },
        textModeLine: o.A.createPureTextLine("→"),
        mathModeLine: {
          id: i.w.nextId(),
          blocks: [n.A.getModelByName("\\rightarrow")]
        }
      }, {
        id: "id2",
        shortcut: {
          type: "char-sequence",
          sequence: "<-"
        },
        textModeLine: o.A.createPureTextLine("←"),
        mathModeLine: {
          id: i.w.nextId(),
          blocks: [n.A.getModelByName("\\leftarrow")]
        }
      }, {
        id: "id3",
        shortcut: {
          type: "char-sequence",
          sequence: "<="
        },
        textModeLine: o.A.createPureTextLine("⩽"),
        mathModeLine: o.A.createPureTextLine("⩽")
      }, {
        id: "id4",
        shortcut: {
          type: "char-sequence",
          sequence: "=>"
        },
        textModeLine: o.A.createPureTextLine("⟹"),
        mathModeLine: o.A.createPureTextLine("⟹")
      }, {
        id: "id5",
        shortcut: {
          type: "char-sequence",
          sequence: ">="
        },
        textModeLine: o.A.createPureTextLine("⩾"),
        mathModeLine: o.A.createPureTextLine("⩾")
      }, {
        id: "id6",
        shortcut: {
          type: "char-sequence",
          sequence: "+-"
        },
        textModeLine: o.A.createPureTextLine("±"),
        mathModeLine: o.A.createPureTextLine("±")
      }, {
        id: "id7",
        shortcut: {
          type: "char-sequence",
          sequence: "-+"
        },
        textModeLine: o.A.createPureTextLine("∓"),
        mathModeLine: o.A.createPureTextLine("∓")
      }, {
        id: "id8",
        shortcut: {
          type: "char-sequence",
          sequence: "<<"
        },
        textModeLine: o.A.createPureTextLine("≪"),
        mathModeLine: o.A.createPureTextLine("≪")
      }, {
        id: "id9",
        shortcut: {
          type: "char-sequence",
          sequence: "≪<"
        },
        textModeLine: o.A.createPureTextLine("⋘"),
        mathModeLine: o.A.createPureTextLine("⋘")
      }, {
        id: "id10",
        shortcut: {
          type: "char-sequence",
          sequence: ">>"
        },
        textModeLine: o.A.createPureTextLine("≫"),
        mathModeLine: o.A.createPureTextLine("≫")
      }, {
        id: "id11",
        shortcut: {
          type: "char-sequence",
          sequence: "≫>"
        },
        textModeLine: o.A.createPureTextLine("⋙"),
        mathModeLine: o.A.createPureTextLine("⋙")
      }, {
        id: "id12",
        shortcut: {
          type: "char-sequence",
          sequence: "~~"
        },
        textModeLine: o.A.createPureTextLine("≈"),
        mathModeLine: o.A.createPureTextLine("≈")
      }, {
        id: "id13",
        shortcut: {
          type: "char-sequence",
          sequence: "≈/"
        },
        textModeLine: o.A.createPureTextLine("≉"),
        mathModeLine: o.A.createPureTextLine("≉")
      }, {
        id: "id14",
        shortcut: {
          type: "char-sequence",
          sequence: "≈="
        },
        textModeLine: o.A.createPureTextLine("≃"),
        mathModeLine: o.A.createPureTextLine("≃")
      }, {
        id: "id15",
        shortcut: {
          type: "char-sequence",
          sequence: "=~"
        },
        textModeLine: o.A.createPureTextLine("≂"),
        mathModeLine: o.A.createPureTextLine("≂")
      }, {
        id: "id16",
        shortcut: {
          type: "char-sequence",
          sequence: "~/"
        },
        textModeLine: o.A.createPureTextLine("≁"),
        mathModeLine: o.A.createPureTextLine("≁")
      }, {
        id: "id17",
        shortcut: {
          type: "char-sequence",
          sequence: "≃="
        },
        textModeLine: o.A.createPureTextLine("≅"),
        mathModeLine: o.A.createPureTextLine("≅")
      }, {
        id: "id18",
        shortcut: {
          type: "char-sequence",
          sequence: ":-"
        },
        textModeLine: o.A.createPureTextLine("÷"),
        mathModeLine: o.A.createPureTextLine("÷")
      }, {
        id: "id19",
        shortcut: {
          type: "char-sequence",
          sequence: "-:"
        },
        textModeLine: o.A.createPureTextLine("÷"),
        mathModeLine: o.A.createPureTextLine("÷")
      }, {
        id: "id20",
        shortcut: {
          type: "char-sequence",
          sequence: "=="
        },
        textModeLine: o.A.createPureTextLine("≡"),
        mathModeLine: o.A.createPureTextLine("≡")
      }, {
        id: "id21",
        shortcut: {
          type: "char-sequence",
          sequence: "=/"
        },
        textModeLine: o.A.createPureTextLine("≠"),
        mathModeLine: o.A.createPureTextLine("≠")
      }, {
        id: "id22",
        shortcut: {
          type: "char-sequence",
          sequence: "><"
        },
        textModeLine: o.A.createPureTextLine("≷"),
        mathModeLine: o.A.createPureTextLine("≷")
      }, {
        id: "id22",
        shortcut: {
          type: "char-sequence",
          sequence: "≡/"
        },
        textModeLine: o.A.createPureTextLine("≢"),
        mathModeLine: o.A.createPureTextLine("≢")
      }, {
        id: "id23",
        shortcut: {
          type: "char-sequence",
          sequence: ">~"
        },
        textModeLine: o.A.createPureTextLine("≳"),
        mathModeLine: o.A.createPureTextLine("≳")
      }, {
        id: "id24",
        shortcut: {
          type: "char-sequence",
          sequence: "<~"
        },
        textModeLine: o.A.createPureTextLine("≲"),
        mathModeLine: o.A.createPureTextLine("≲")
      }, {
        id: "id25",
        shortcut: {
          type: "char-sequence",
          sequence: "</"
        },
        textModeLine: o.A.createPureTextLine("≮"),
        mathModeLine: o.A.createPureTextLine("≮")
      }, {
        id: "id26",
        shortcut: {
          type: "char-sequence",
          sequence: ">/"
        },
        textModeLine: o.A.createPureTextLine("≯"),
        mathModeLine: o.A.createPureTextLine("≯")
      }, {
        id: "id27",
        shortcut: {
          type: "char-sequence",
          sequence: " mod "
        },
        textModeLine: null,
        mathModeLine: {
          id: i.w.nextId(),
          blocks: [n.A.getModelByName("\\mod")]
        }
      }];
    }
  }
  const a = new s();
};
