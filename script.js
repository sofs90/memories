/* ==========================================================================
   MEMORIA — Personal Archive Service
   All editable content (credentials, files, folders, dates, texts) lives
   inside CONFIG and archiveData below. UI logic is generic and reads from
   these two objects — change content here without touching the rest.
   ========================================================================== */

/* ---------------------------------------------------------------------- */
/* CONFIG — account / credentials / system chrome                         */
/* ---------------------------------------------------------------------- */

const CONFIG = {
  accountId: "sfo",          // ACCOUNT ID expected at login
  accessKey: "piratinha27",  // ACCESS KEY expected at login
  accountLabel: "S.F.O.",
  recoveryNode: "M-84",
  created: "2026",
  lastSync: "2081",
  status: "ARCHIVED",
  node: "M-84",
  unit: "027",
};

/* ---------------------------------------------------------------------- */
/* archiveData — the entire filesystem shown after login                  */
/*                                                                          */
/* Folder node:  { name, type:"folder", icon, children:{ key: node, ... } }
/* File node:    {
/*     name, type:"file", ext, date, size,
/*     status:  "ok" | "partial" | "corrupted" | "unavailable" | "unsupported",
/*     render:  "text" | "image" | "document",
/*     content: string (for text/document) or caption (for image),
/*     meta:    optional extra key/value pairs shown in special modals
/*   }
/* ---------------------------------------------------------------------- */

const archiveData = {
  name: "root",
  type: "folder",
  children: {

    fotos: {
      name: "Fotos", type: "folder", icon: "🖻",
      children: {

        f2024: {
          name: "2024", type: "folder", icon: "▤",
          children: {
            img1608: {
              name: "IMG_1608.jpg", type: "file", ext: "JPG", date: "03/2024", size: "2.1 MB",
              status: "ok", render: "image",
              content: "Sem legenda registrada."
            },
            pirangucu: {
              name: "pirangucu.jpg", type: "file", ext: "JPG", date: "07/2024", size: "1.8 MB",
              status: "partial", render: "image",
              content: "…ônibus, riacho, resto do arquivo perdido."
            },
            lavanda: {
              name: "lavanda.jpg", type: "file", ext: "JPG", date: "09/2024", size: "2.4 MB",
              status: "ok", render: "image",
              content: "Campo perto da estrada. Ela colheu um punhado e guardou dentro do carro por semanas."
            },
            jazz: {
              name: "jazz.jpg", type: "file", ext: "JPG", date: "11/2024", size: "1.6 MB",
              status: "partial", render: "image",
              content: "…disco tocando, resto da cena não recuperado."
            }
          }
        },

        f2026: {
          name: "2026", type: "folder", icon: "▤",
          children: {
            formatura: {
              name: "formatura.jpg", type: "file", ext: "JPG", date: "12/2026", size: "2.0 MB",
              status: "ok", render: "image",
              content: "Toga alugada, tamanho errado. Ninguém percebeu na foto."
            },
            onibus: {
              name: "quase_perdi_o_onibus.jpg", type: "file", ext: "JPG", date: "12/2026", size: "1.4 MB",
              status: "partial", render: "image",
              content: "…correndo, mala aberta, resto ilegível."
            }
          }
        },

        f2034: {
          name: "2034", type: "folder", icon: "▤",
          children: {
            mudanca: {
              name: "mudanca.jpg", type: "file", ext: "JPG", date: "04/2034", size: "2.6 MB",
              status: "ok", render: "image",
              content: "Caixas empilhadas na sala. Alguma coisa observando tudo do alto de uma delas."
            },
            gatoCaixa: {
              name: "gato_na_caixa.jpg", type: "file", ext: "JPG", date: "04/2034", size: "2.2 MB",
              status: "ok", render: "image",
              content: "Pingado não ajudou em nada com a mudança."
            },
            naoQueriaOutro: {
              name: "ela_disse_que_nao_queria_outro.jpg", type: "file", ext: "JPG", date: "05/2034", size: "2.3 MB",
              status: "ok", render: "image",
              content: "Mas ficou com ele de qualquer jeito."
            }
          }
        },

        f2048: {
          name: "2048", type: "folder", icon: "▤",
          children: {
            atelier: {
              name: "atelier.jpg", type: "file", ext: "JPG", date: "02/2048", size: "2.9 MB",
              status: "ok", render: "image",
              content: "Janela grande, luz da tarde, cheiro de tinta que não sai da parede."
            },
            tintaMesa: {
              name: "tinta_na_mesa.jpg", type: "file", ext: "JPG", date: "02/2048", size: "1.9 MB",
              status: "ok", render: "image",
              content: "Mancha de laranja ultraforte que nunca mais saiu da madeira."
            },
            aindaBaguncando: {
              name: "ainda_fazendo_bagunca.jpg", type: "file", ext: "JPG", date: "06/2048", size: "2.1 MB",
              status: "ok", render: "image",
              content: "Vinte e quatro anos depois e o chão continua do mesmo jeito."
            }
          }
        },

        f2056: {
          name: "2056", type: "folder", icon: "▤",
          children: {
            pingadoDeNovo: {
              name: "pingado_de_novo.jpg", type: "file", ext: "JPG", date: "01/2056", size: "2.0 MB",
              status: "ok", render: "image",
              content: "Terceiro Pingado da casa. O nome nunca mudou."
            },
            ferias: {
              name: "ferias.jpg", type: "file", ext: "JPG", date: "07/2056", size: "2.4 MB",
              status: "ok", render: "image",
              content: "Mesma varanda de sempre, gente diferente ao redor com o passar dos anos."
            },
            aniversario: {
              name: "aniversario.jpg", type: "file", ext: "JPG", date: "10/2056", size: "2.2 MB",
              status: "ok", render: "image",
              content: "Bolo pequeno, mesa grande demais para duas pessoas."
            }
          }
        }
      }
    },

    faculdade: {
      name: "Faculdade", type: "folder", icon: "🗀",
      children: {
        grade2026: {
          name: "grade_2026.pdf", type: "file", ext: "PDF", date: "02/2026", size: "88 KB",
          status: "ok", render: "document",
          content: "GRADE HORÁRIA — 2026.1\n\nSegunda   09h  Estruturas de Dados\nTerça     14h  Cálculo III\nQuarta    09h  Estruturas de Dados\nQuinta    16h  Laboratório de Computação\nSexta     10h  Introdução a Sistemas\n\nObs.: mudança de sala no lab, ver mural."
        },
        computacao: {
          name: "computacao.pdf", type: "file", ext: "PDF", date: "05/2026", size: "140 KB",
          status: "ok", render: "document",
          content: "INTRODUÇÃO A SISTEMAS — NOTAS DE CURSO\n\nResumo de aulas sobre arquitetura de armazenamento pessoal e sistemas legados. Trabalho final sugerido: projetar um serviço de arquivamento com foco em preservação de longo prazo.\n\n(Comentário na margem, tinta diferente: 'ironia, né.')"
        },
        trabalhoFinal: {
          name: "trabalho_final.pdf", type: "file", ext: "PDF", date: "11/2026", size: "—",
          status: "corrupted"
        },
        salaAntiga: {
          name: "sala_antiga.jpg", type: "file", ext: "JPG", date: "03/2026", size: "1.7 MB",
          status: "ok", render: "image",
          content: "Sala 12, terceiro andar. Cadeiras enfileiradas, uma vazia perto da janela."
        },
        anotacoes: {
          name: "anotacoes.txt", type: "file", ext: "TXT", date: "03/2026", size: "1 KB",
          status: "ok", render: "text",
          content: "Engraçado pensar que tudo começou porque uma cadeira estava vazia."
        }
      }
    },

    casa: {
      name: "Casa", type: "folder", icon: "🗀",
      children: {
        contrato: {
          name: "contrato_cabana.pdf", type: "file", ext: "PDF", date: "03/2063", size: "212 KB",
          status: "ok", render: "document",
          content: "PROPRIEDADE RESIDENCIAL — REGISTRO 2063\n\nProprietária A: S. F. O.\nProprietária B: ████████████\n\nStatus: Residência principal\nUso: Habitação contínua\n\nDocumento gerado automaticamente a partir do registro arquivado. Campos ilegíveis foram preservados como constavam no original."
        },
        reforma: {
          name: "reforma_2052.pdf", type: "file", ext: "PDF", date: "08/2052", size: "301 KB",
          status: "ok", render: "document",
          content: "REGISTRO DE REFORMA — 2052\n\nÁrea do ateliê ampliada (parede sul).\nInstalação de estante embutida — sala principal.\nReparo estrutural na parede oeste, dormitório secundário.\n\nObs. do responsável técnico: 'espaço extra encontrado dentro da parede oeste durante a obra, sem uso aparente, mantido fechado a pedido das proprietárias.'"
        },
        inventario: {
          name: "inventario.pdf", type: "file", ext: "PDF", date: "01/2064", size: "96 KB",
          status: "ok", render: "document",
          content: "INVENTÁRIO DA RESIDÊNCIA — ITENS PESSOAIS\n\n— duas canecas, uso diário\n— livros diversos, estante da sala\n— material de pintura, ateliê\n— caixa de fotografias, quarto secundário\n— flores secas (lírios, já sem cor)\n— console antigo, não ligado desde 2071\n— documentos pessoais, pasta lacrada"
        },
        plantas: {
          name: "plantas_da_casa.pdf", type: "file", ext: "PDF", date: "03/2063", size: "—",
          status: "corrupted"
        },
        fotoExterior: {
          name: "foto_exterior_2063.jpg", type: "file", ext: "JPG", date: "03/2063", size: "2.5 MB",
          status: "ok", render: "image",
          content: "Fachada da cabana pouco depois da compra. Ainda sem a reforma do ateliê."
        }
      }
    },

    viagens: {
      name: "Viagens", type: "folder", icon: "🗀",
      children: {
        pirangucu2024: {
          name: "pirangucu_2024.txt", type: "file", ext: "TXT", date: "07/2024", size: "1 KB",
          status: "ok", render: "text",
          content: "Pegamos o ônibus sem planejar muito. Sentamos perto de um riacho e ficamos ali por horas."
        },
        viagem2031: {
          name: "viagem_2031.txt", type: "file", ext: "TXT", date: "01/2031", size: "1 KB",
          status: "ok", render: "text",
          content: "Mapa errado, estrada certa. Chegamos tarde e não importou."
        },
        ferias2042: {
          name: "ferias_2042.txt", type: "file", ext: "TXT", date: "07/2042", size: "1 KB",
          status: "ok", render: "text",
          content: "Voltamos ao mesmo lugar de sempre. Já não precisávamos de mapa nenhum."
        },
        retorno2059: {
          name: "retorno_2059.txt", type: "file", ext: "TXT", date: "09/2059", size: "1 KB",
          status: "ok", render: "text",
          content: "Voltei sozinha dessa vez. A casa estava do jeito que a deixamos."
        }
      }
    },

    projetos: {
      name: "Projetos", type: "folder", icon: "🗀",
      children: {
        ideias: {
          name: "ideias.txt", type: "file", ext: "TXT", date: "—", size: "2 KB",
          status: "ok", render: "text",
          content: "- app pra lembrar de regar a lavanda antes que morra de novo\n- nome pro próximo gato: Coraline? Pingado Jr.?\n- anotar a receita da laranja ultraforte antes que a gente esqueça outra vez\n- podcast de jazz, só ideia, nunca vamos fazer isso\n- avisar o pessoal do Embriamagos que o grupo ainda existe"
        },
        final: {
          name: "final.pdf", type: "file", ext: "PDF", date: "—", size: "44 KB",
          status: "ok", render: "document",
          content: "RASCUNHO — VERSÃO 'FINAL'\n\n(conteúdo incompleto, retomar depois)"
        },
        final2: {
          name: "final2.pdf", type: "file", ext: "PDF", date: "—", size: "51 KB",
          status: "ok", render: "document",
          content: "RASCUNHO — VERSÃO 'FINAL2'\n\ndesculpa, o outro arquivo não devia ter esse nome"
        },
        finalAgoraSim: {
          name: "final_agora_sim.pdf", type: "file", ext: "PDF", date: "—", size: "53 KB",
          status: "ok", render: "document",
          content: "RASCUNHO — VERSÃO 'FINAL_AGORA_SIM'\n\ndessa vez é sério. (spoiler: não era)"
        },
        naoMexer: {
          name: "nao_mexer.zip", type: "file", ext: "ZIP", date: "—", size: "—",
          status: "unsupported"
        },
        jogoAntigo: {
          name: "jogo_antigo.exe", type: "file", ext: "EXE", date: "—", size: "—",
          status: "unsupported"
        },
        embriamagos: {
          name: "embriamagos_backup.zip", type: "file", ext: "ZIP", date: "—", size: "—",
          status: "unsupported"
        }
      }
    },

    pessoal: {
      name: "Pessoal", type: "folder", icon: "🗀",
      children: {

        documentos: {
          name: "documentos", type: "folder", icon: "▤",
          children: {
            certidao: {
              name: "certidao.pdf", type: "file", ext: "PDF", date: "—", size: "—",
              status: "corrupted"
            }
          }
        },

        cartas: {
          name: "cartas", type: "folder", icon: "▤",
          children: {
            aniversario2032: {
              name: "aniversario_2032.txt", type: "file", ext: "TXT", date: "10/2032", size: "1 KB",
              status: "ok", render: "text",
              content: "Feliz aniversário. Prometo escrever algo melhor no ano que vem."
            },
            aniversario2041: {
              name: "aniversario_2041.txt", type: "file", ext: "TXT", date: "10/2041", size: "1 KB",
              status: "ok", render: "text",
              content: "Nove anos depois e ainda devo aquele 'algo melhor'."
            },
            rascunho: {
              name: "rascunho.txt", type: "file", ext: "TXT", date: "—", size: "1 KB",
              status: "ok", render: "text",
              content: "Eu devia ter dito isso antes.\n\nTalvez você já saiba.\n\nAlgumas coisas demoraram mais do que deveriam."
            },
            semTitulo: {
              name: "sem_titulo.txt", type: "file", ext: "TXT", date: "—", size: "1 KB",
              status: "ok", render: "text",
              content: "Comecei a escrever isso várias vezes.\n\nAcho que nunca encontrei uma maneira boa de terminar.\n\nTalvez seja por isso que ainda esteja aqui."
            }
          }
        },

        antigo: {
          name: "antigo", type: "folder", icon: "▤",
          children: {
            diario: {
              name: "diario_adolescencia.txt", type: "file", ext: "TXT", date: "—", size: "1 KB",
              status: "partial", render: "text",
              content: "…terça-feira. Cadeira vazia de novo na sala. Comecei a prestar atenção em quem senta onde.\n\n[restante do arquivo não recuperado]"
            }
          }
        }
      }
    },

    naoapagar: {
      name: "Não apagar", type: "folder", icon: "⚑",
      children: {
        leiaMe: {
          name: "leia_me.txt", type: "file", ext: "TXT", date: "—", size: "1 KB",
          status: "ok", render: "text",
          content: "Se alguém encontrou isso porque esqueceu a senha de novo:\n\nnão mexe no backup.\n\nPrincipalmente você."
        },
        backup: {
          name: "backup", type: "folder", icon: "▤",
          children: {
            cartaFinal: {
              name: "carta_final.bak", type: "file", ext: "BAK", date: "16/08/20██", size: "—",
              status: "unavailable",
              meta: {
                device: "HOME-PC",
                date: "16/08/20██",
                location: "PRIMARY RESIDENCE"
              }
            }
          }
        },
        recovery: {
          name: "recovery", type: "folder", icon: "▤",
          children: {
            snapshot: {
              name: "system_snapshot.log", type: "file", ext: "LOG", date: "—", size: "3 KB",
              status: "ok", render: "text",
              content: "[SYNC] index rebuilt — 2 folders skipped (permission expired)\n[SYNC] carta_final.bak — sync failed, target unreachable\n[SYNC] last known location recorded before failure\n[SYSTEM] archive marked READ ONLY following account inactivity"
            }
          }
        }
      }
    },

    readme: {
      name: "leia_primeiro.txt", type: "file", ext: "TXT", date: "—", size: "1 KB",
      status: "ok", render: "text",
      content: "ARCHIVE INDEX REBUILT. SOME FILES MAY BE UNAVAILABLE.\n\nEste serviço foi descontinuado. O acesso foi mantido apenas por compatibilidade com sistemas legados."
    }
  }
};

const activeArchiveData = {
  name: "root",
  type: "folder",
  children: {
    documentos: {
      name: "DOCUMENTOS",
      type: "folder",
      icon: "🗀",
      children: {
        seguroResidencial: {
          name: "seguro_residencial_2063.pdf",
          type: "file",
          ext: "PDF",
          date: "2063",
          size: "04%",
          status: "corrupted",
        },
        reformaCabana: {
          name: "reforma_cabana_2057.pdf",
          type: "file",
          ext: "PDF",
          date: "2057",
          size: "18%",
          status: "corrupted",
        },
        mudanca: {
          name: "mudanca_2041.pdf",
          type: "file",
          ext: "PDF",
          date: "2041",
          size: "12%",
          status: "corrupted",
        },
        registroPropriedade: {
          name: "registro_propriedade_CB-041-77.pdf",
          type: "file",
          ext: "PDF",
          date: "2078",
          size: "71%",
          status: "ok",
          render: "document",
          content: "REGISTRO DE PROPRIEDADE\n\nCB-041-77\n\nTITULAR: S. F. O.\nUNIDADE: RESIDENCIAL\n\nOBSERVAÇÃO: DOCUMENTO PARCIALMENTE RECONSTRUIDO A PARTIR DO INDICE LEGADO.\n\nCONDIÇÃO DO ARQUIVO: RECUPERADO",
        },
        transferencia: {
          name: "transferencia_MAlmeida_2041.pdf",
          type: "file",
          ext: "PDF",
          date: "2041",
          size: "09%",
          status: "corrupted",
        },
        matriculaCeline: {
          name: "matricula_celine_2052.pdf",
          type: "file",
          ext: "PDF",
          date: "2052",
          size: "05%",
          status: "corrupted",
        },
        matriculaFrancesca: {
          name: "matricula_francesca_2055.pdf",
          type: "file",
          ext: "PDF",
          date: "2055",
          size: "03%",
          status: "corrupted",
        },
      },
    },
    fotos: {
      name: "FOTOS",
      type: "folder",
      icon: "🖻",
      children: {
        foto1: { name: "2024_08_16.jpg", type: "file", ext: "JPG", date: "2024", size: "07%", status: "corrupted" },
        foto2: { name: "2024_08_17_pirangucu.jpg", type: "file", ext: "JPG", date: "2024", size: "03%", status: "corrupted" },
        foto3: { name: "2024_pingado.jpg", type: "file", ext: "JPG", date: "2024", size: "11%", status: "corrupted" },
        foto4: { name: "2041_primeiro_dia_cabana.jpg", type: "file", ext: "JPG", date: "2041", size: "06%", status: "corrupted" },
        foto5: { name: "2057_reforma.jpg", type: "file", ext: "JPG", date: "2057", size: "14%", status: "corrupted" },
        foto6: { name: "celine_aniversario.jpg", type: "file", ext: "JPG", date: "—", size: "04%", status: "corrupted" },
        foto7: { name: "francesca_formatura.jpg", type: "file", ext: "JPG", date: "—", size: "02%", status: "corrupted" },
        foto8: { name: "2067_08_16_varanda.jpg", type: "file", ext: "JPG", date: "2067", size: "08%", status: "corrupted" },
        foto9: { name: "as_meninas_na_varanda.jpg", type: "file", ext: "JPG", date: "—", size: "01%", status: "irrecoverable" },
        foto10: { name: "2074_nos_duas.jpg", type: "file", ext: "JPG", date: "—", size: "02%", status: "irrecoverable" },
      },
    },
    notas: {
      name: "NOTAS",
      type: "folder",
      icon: "🗀",
      children: {
        nota1: { name: "16_de_agosto.txt", type: "file", ext: "TXT", date: "—", size: "04%", status: "corrupted" },
        nota2: { name: "coisas_que_ela_gosta.txt", type: "file", ext: "TXT", date: "—", size: "09%", status: "corrupted" },
        nota3: { name: "nao_esquecer.txt", type: "file", ext: "TXT", date: "—", size: "16%", status: "corrupted" },
        nota4: { name: "primeiro_encontro.txt", type: "file", ext: "TXT", date: "—", size: "03%", status: "corrupted" },
        nota5: { name: "o_dia_do_riacho.txt", type: "file", ext: "TXT", date: "—", size: "07%", status: "corrupted" },
        nota6: { name: "para_quando_formos_velhas.txt", type: "file", ext: "TXT", date: "—", size: "01%", status: "irrecoverable" },
      },
    },
    pessoal: {
      name: "PESSOAL",
      type: "folder",
      icon: "🗀",
      children: {
        pessoal1: { name: "ela.txt", type: "file", ext: "TXT", date: "—", size: "06%", status: "corrupted" },
        pessoal2: { name: "datas_importantes.txt", type: "file", ext: "TXT", date: "—", size: "11%", status: "corrupted" },
        pessoal3: { name: "coisas_que_guardei.txt", type: "file", ext: "TXT", date: "—", size: "03%", status: "corrupted" },
        pessoal4: { name: "carta_rascunho.txt", type: "file", ext: "TXT", date: "—", size: "02%", status: "corrupted" },
        pessoal5: { name: "carta_para_████████.txt", type: "file", ext: "TXT", date: "—", size: "00%", status: "irrecoverable" },
      },
    },
    arquivados: {
      name: "ARQUIVADOS",
      type: "folder",
      icon: "🗀",
      children: {
        arq1: { name: "jazz_cafe.txt", type: "file", ext: "TXT", date: "—", size: "08%", status: "corrupted" },
        arq2: { name: "bela_e_a_fera.txt", type: "file", ext: "TXT", date: "—", size: "05%", status: "corrupted" },
        arq3: { name: "embriamagos.dat", type: "file", ext: "DAT", date: "—", size: "12%", status: "corrupted" },
        arq4: { name: "pirarinha.txt", type: "file", ext: "TXT", date: "—", size: "03%", status: "corrupted" },
        arq5: { name: "cadeira_vazia.txt", type: "file", ext: "TXT", date: "—", size: "01%", status: "irrecoverable" },
        arq6: { name: "celine_primeiros_passos.mp4", type: "file", ext: "MP4", date: "—", size: "00%", status: "irrecoverable" },
        arq7: { name: "francesca_primeiro_dia.jpg", type: "file", ext: "JPG", date: "—", size: "04%", status: "corrupted" },
        arq8: { name: "ferias_em_familia_2059.zip", type: "file", ext: "ZIP", date: "2059", size: "03%", status: "corrupted" },
      },
    },
  },
};

/* Sidebar folder order (root-level keys), with display icons */
const SIDEBAR_FOLDERS = [
  { key: "home", label: "Home", icon: "▣" },
  { key: "documentos", label: "DOCUMENTOS", icon: "🗀" },
  { key: "fotos", label: "FOTOS", icon: "🖻" },
  { key: "notas", label: "NOTAS", icon: "🗀" },
  { key: "pessoal", label: "PESSOAL", icon: "🗀" },
  { key: "arquivados", label: "ARQUIVADOS", icon: "🗀" },
];

/* Rotating flavor lines for the bottom system ticker */
const SYSTEM_MESSAGES = [
  "INDEX CACHE: PARTIAL",
  "NO WRITE ACCESS — ARCHIVE IS READ ONLY",
  "SOME METADATA RECOVERED FROM SECONDARY NODE",
  "CONNECTION: LOCAL CACHE ONLY",
  "LEGACY SYSTEM — MAINTAINED FOR COMPATIBILITY",
  "LAST INTEGRITY CHECK: INCOMPLETE",
];

/* ---------------------------------------------------------------------- */
/* State                                                                   */
/* ---------------------------------------------------------------------- */

const state = {
  path: [],        // array of keys from root, e.g. ["fotos", "f2024"]
  attempts: 2,      // login attempts remaining (never actually locks)
};

/* ---------------------------------------------------------------------- */
/* DOM refs                                                                */
/* ---------------------------------------------------------------------- */

const el = {
  screenLogin: document.getElementById("screen-login"),
  screenLoading: document.getElementById("screen-loading"),
  screenApp: document.getElementById("screen-app"),
  loginForm: document.getElementById("login-form"),
  accountInput: document.getElementById("account-id"),
  keyInput: document.getElementById("access-key"),
  loginMessage: document.getElementById("login-message"),
  loadingLines: document.getElementById("loading-lines"),
  hdrAccount: document.getElementById("hdr-account"),
  hdrSync: document.getElementById("hdr-sync"),
  hdrClock: document.getElementById("hdr-clock"),
  sidebarList: document.getElementById("sidebar-list"),
  sidebar: document.getElementById("sidebar"),
  sidebarBackdrop: document.getElementById("sidebar-backdrop"),
  menuToggle: document.getElementById("menu-toggle"),
  backBtn: document.getElementById("back-btn"),
  breadcrumbs: document.getElementById("breadcrumbs"),
  fileGrid: document.getElementById("file-grid"),
  systemTicker: document.getElementById("system-ticker"),
  modalOverlay: document.getElementById("modal-overlay"),
  modalTitle: document.getElementById("modal-title"),
  modalBody: document.getElementById("modal-body"),
  modalClose: document.getElementById("modal-close"),
  hdrNode: document.getElementById("hdr-node"),
  hdrStatus: document.getElementById("hdr-status"),
  hdrCreated: document.getElementById("hdr-created"),
};

/* ---------------------------------------------------------------------- */
/* Login                                                                   */
/* ---------------------------------------------------------------------- */

el.loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = el.accountInput.value.trim().toLowerCase();
  const key = el.keyInput.value.trim();

  if (account === CONFIG.accountId && key === CONFIG.accessKey) {
    el.loginMessage.textContent = "";
    startLoadingSequence();
    return;
  }

  const remaining = Math.max(state.attempts, 0);
  el.loginMessage.innerHTML =
    `ACCESS DENIED<br>INVALID ARCHIVE CREDENTIALS` +
    (remaining > 0 ? `<br>${remaining} ATTEMPTS REMAINING` : "");
  if (state.attempts > 0) state.attempts--;
  el.keyInput.value = "";
  el.keyInput.focus();
});

async function startLoadingSequence(){
  el.screenLogin.classList.add("hidden");
  el.screenLoading.classList.remove("hidden");
  el.loadingLines.textContent = "";

  const steps = [
    "Mounting archive...",
    "Recovering index...",
    "Integrity: 74%",
    "Archive mounted successfully.",
  ];

  for (const line of steps){
    await appendLoadingLine(line);
    await wait(650);
  }

  await wait(400);
  el.screenLoading.classList.add("hidden");
  enterApp();
}

function appendLoadingLine(text){
  return new Promise((resolve) => {
    el.loadingLines.textContent += (el.loadingLines.textContent ? "\n" : "") + text;
    resolve();
  });
}

function wait(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* ---------------------------------------------------------------------- */
/* App entry                                                               */
/* ---------------------------------------------------------------------- */

function enterApp(){
  el.hdrAccount.textContent = CONFIG.accountLabel;
  el.hdrNode.textContent = CONFIG.recoveryNode;
  el.hdrStatus.textContent = CONFIG.status;
  el.hdrCreated.textContent = CONFIG.created;
  el.hdrSync.textContent = CONFIG.lastSync;
  el.screenApp.classList.remove("hidden");

  buildSidebar();
  renderPath([]); // start at Home / root
  startClock();
  startTicker();
}

/* ---------------------------------------------------------------------- */
/* Sidebar                                                                 */
/* ---------------------------------------------------------------------- */

function buildSidebar(){
  el.sidebarList.innerHTML = "";
  SIDEBAR_FOLDERS.forEach((f) => {
    const li = document.createElement("li");
    li.dataset.key = f.key;
    li.innerHTML = `<span class="icon">${f.icon}</span><span>${f.label}</span>`;
    li.addEventListener("click", () => {
      renderPath(f.key === "home" ? [] : [f.key]);
      closeMobileSidebar();
    });
    el.sidebarList.appendChild(li);
  });
  highlightSidebar([]);
}

function highlightSidebar(path){
  const topKey = path.length ? path[0] : "home";
  [...el.sidebarList.children].forEach((li) => {
    li.classList.toggle("active", li.dataset.key === topKey);
  });
}

el.menuToggle.addEventListener("click", () => {
  el.sidebar.classList.toggle("open");
  el.sidebarBackdrop.classList.toggle("hidden");
});

el.sidebarBackdrop.addEventListener("click", closeMobileSidebar);

function closeMobileSidebar(){
  el.sidebar.classList.remove("open");
  el.sidebarBackdrop.classList.add("hidden");
}

/* ---------------------------------------------------------------------- */
/* Navigation / rendering                                                  */
/* ---------------------------------------------------------------------- */

function resolveNode(path){
  let node = activeArchiveData;
  for (const key of path){
    if (!node.children || !node.children[key]) return null;
    node = node.children[key];
  }
  return node;
}

function renderPath(path){
  const node = resolveNode(path);
  if (!node || node.type !== "folder") return;

  state.path = path;
  highlightSidebar(path);
  renderBreadcrumbs(path);
  renderGrid(node);
  el.backBtn.disabled = path.length === 0;
}

el.backBtn.addEventListener("click", () => {
  if (state.path.length === 0) return;
  renderPath(state.path.slice(0, -1));
});

function renderBreadcrumbs(path){
  el.breadcrumbs.innerHTML = "";

  const home = document.createElement("span");
  home.className = "crumb" + (path.length === 0 ? " current" : "");
  home.textContent = "Home";
  home.addEventListener("click", () => renderPath([]));
  el.breadcrumbs.appendChild(home);

  let acc = [];
  path.forEach((key, i) => {
    acc = acc.concat(key);
    const node = resolveNode(acc);
    if (!node) return;

    const sep = document.createElement("span");
    sep.className = "sep";
    sep.textContent = "/";
    el.breadcrumbs.appendChild(sep);

    const crumb = document.createElement("span");
    const isLast = i === path.length - 1;
    crumb.className = "crumb" + (isLast ? " current" : "");
    crumb.textContent = node.name;
    const target = acc.slice();
    if (!isLast) crumb.addEventListener("click", () => renderPath(target));
    el.breadcrumbs.appendChild(crumb);
  });
}

function renderGrid(folderNode){
  el.fileGrid.innerHTML = "";
  const children = folderNode.children || {};
  const keys = Object.keys(children);

  if (keys.length === 0){
    const empty = document.createElement("div");
    empty.className = "empty-note";
    empty.textContent = "EMPTY DIRECTORY";
    el.fileGrid.appendChild(empty);
    return;
  }

  // folders first, then files, alphabetical-ish by insertion order
  const folders = keys.filter((k) => children[k].type === "folder");
  const files = keys.filter((k) => children[k].type === "file");

  [...folders, ...files].forEach((key) => {
    el.fileGrid.appendChild(buildCard(children[key], key));
  });
}

function buildCard(node, key){
  const card = document.createElement("div");
  const statusClass = node.type === "file" && node.status !== "ok" ? ` status-${node.status}` : "";
  card.className = `item-card ${node.type}${statusClass}`;

  const icon = node.type === "folder" ? (node.icon || "🗀") : iconForFile(node);
  const flag = fileFlag(node);

  card.innerHTML = `
    <div class="item-icon">${icon}</div>
    <div class="item-name">${escapeHtml(node.name)}</div>
    ${flag ? `<span class="tag-flag ${node.status}">${flag}</span>` : ""}
    <div class="item-sub">
      <span>${node.type === "file" ? (node.ext || "") : "DIR"}</span>
      <span>${node.type === "file" ? (node.date || "") : ""}</span>
    </div>
  `;

  card.addEventListener("click", () => {
    if (node.type === "folder"){
      renderPath(state.path.concat(key));
    } else {
      openModal(node);
    }
  });

  return card;
}

function iconForFile(node){
  if (node.status === "corrupted" || node.status === "irrecoverable" || node.status === "unavailable") return "▨";
  if (node.status === "unsupported") return "⛒";
  if (node.render === "image") return "🖼";
  if (node.ext === "PDF") return "▤";
  return "▯";
}

function fileFlag(node){
  switch (node.status){
    case "corrupted": return "CORRUPTED";
    case "irrecoverable": return "IRRECUPERÁVEL";
    case "partial": return "PARTIAL";
    case "unavailable": return "UNAVAILABLE";
    case "unsupported": return "UNSUPPORTED";
    default: return "";
  }
}

function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------------------------------------------------------------- */
/* Modal                                                                   */
/* ---------------------------------------------------------------------- */

function openModal(file){
  el.modalTitle.textContent = file.name;
  el.modalBody.innerHTML = buildModalBody(file);
  el.modalOverlay.classList.remove("hidden");
}

function closeModal(){
  el.modalOverlay.classList.add("hidden");
}

el.modalClose.addEventListener("click", closeModal);
el.modalOverlay.addEventListener("click", (e) => {
  if (e.target === el.modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

function buildModalBody(file){
  switch (file.status){

    case "corrupted":
      return `
        <div class="modal-flag corrupted">RECOVERY ERROR</div>
        <pre>O bloco de dados solicitado apresenta danos superiores ao limite de reconstrução.

O conteúdo original não pôde ser recuperado.

O nome do arquivo foi preservado no índice do sistema.

NODE: M-84</pre>
        ${metaTable(file)}
      `;

    case "irrecoverable":
      return `
        <div class="modal-flag irrecoverable">RECOVERY FAILED</div>
        <pre>Nenhum bloco de dados válido foi localizado.

A reconstrução deste arquivo não é possível.

Somente informações residuais do índice foram preservadas.</pre>
        ${metaTable(file)}
      `;

    case "unavailable":
      return `
        <div class="modal-flag unavailable">FILE NOT AVAILABLE</div>
        <p>Original file removed from archive.<br>Last synchronized location available.</p>
        <table class="modal-meta-table">
          <tr><td>DEVICE</td><td>${file.meta?.device ?? "—"}</td></tr>
          <tr><td>DATE</td><td>${file.meta?.date ?? "—"}</td></tr>
          <tr><td>LOCATION</td><td>${file.meta?.location ?? "—"}</td></tr>
        </table>
      `;

    case "unsupported":
      return `
        <div class="modal-flag corrupted">UNSUPPORTED FILE FORMAT</div>
        <p>APPLICATION NO LONGER AVAILABLE</p>
        ${metaTable(file)}
      `;
  }

  // status === "ok" or "partial" -> dispatch on render type
  if (file.render === "image") return imageModal(file);
  if (file.render === "document") return documentModal(file);
  return textModal(file);
}

function imageModal(file){
  const partial = file.status === "partial";
  return `
    ${partial ? `<div class="modal-flag partial">FILE PARTIALLY CORRUPTED</div>` : ""}
    <div class="image-preview${partial ? " glitch" : ""}">
      <img src="assets/photo-placeholder.svg" alt="${escapeHtml(file.name)}">
    </div>
    <p class="image-caption">${escapeHtml(file.content || "")}</p>
    ${metaTable(file)}
  `;
}

function documentModal(file){
  return `
    <div class="doc-sheet">${escapeHtml(file.content || "")}</div>
    ${metaTable(file)}
  `;
}

function textModal(file){
  return `
    <pre>${escapeHtml(file.content || "")}</pre>
    ${metaTable(file)}
  `;
}

function metaTable(file){
  return `
    <table class="modal-meta-table">
      <tr><td>FILE</td><td>${escapeHtml(file.name)}</td></tr>
      <tr><td>DATE</td><td>${file.date || "—"}</td></tr>
      <tr><td>TYPE</td><td>${file.ext || "—"}</td></tr>
      <tr><td>SIZE</td><td>${file.size || "—"}</td></tr>
    </table>
  `;
}

/* ---------------------------------------------------------------------- */
/* Clock + system ticker                                                   */
/* ---------------------------------------------------------------------- */

function startClock(){
  const update = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    el.hdrClock.textContent = `${hh}:${mm}:${ss}`;
  };
  update();
  setInterval(update, 1000);
}

function startTicker(){
  let i = 0;
  const update = () => {
    el.systemTicker.textContent = `// ${SYSTEM_MESSAGES[i % SYSTEM_MESSAGES.length]}`;
    i++;
  };
  update();
  setInterval(update, 6000);
}
