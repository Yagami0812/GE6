import { useState, useRef, useEffect } from "react";
import "./App.css";

const movements = [
  {
    id: 1,
    name: "Prehistoric",
    period: "40,000–3,000 BCE",
    color: "#a0845c",
    accent: "#f0dfc0",
    context:
      "Prehistoric art represents humanity's earliest creative expressions, found on cave walls, carved into bone, and shaped from stone. Produced by hunter-gatherer societies across Africa, Europe, and Asia, these works served ritual, spiritual, and communicative purposes long before written language existed.",
    artists: [
      {
        name: "Unknown Cave Artists",
        artistImage:
          "https://www.sapiens.org/app/uploads/2022/08/06_R_Cro-Magnon-painting_full.jpg",
      },
      {
        name: "Paleolithic Hunter / Gatherers",
        artistImage:
          "https://cdn.sci.news/images/2015/11/image_3440f-European-Ancestry-Fourth-Strand.jpg",
      },
    ],
    characteristics: [
      "Animal and human figures painted on cave walls",
      "Use of natural pigments: ochre, charcoal, manganese",
      "Symbolic and totemic subject matter",
      "Small carved figurines (Venus figures) emphasizing fertility",
    ],
    evolution:
      "Prehistoric art evolved from simple finger tracings and hand stencils to complex multi-figure compositions. Artists developed techniques for depicting motion and volume using natural rock contours. The transition from nomadic to settled life gradually shifted art from portable objects toward monumental stone arrangements.",
    elements: ["Symbol", "Silhouette", "Pigment", "Texture", "Rhythm"],
    sampleImages: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lascaux_painting.jpg/1280px-Lascaux_painting.jpg",
        caption: "Lascaux Cave Paintings, Dordogne, France, c. 17,000 BCE",
      },
      {
        src: "https://i0.wp.com/theessentialschoolofpainting.com/wp-content/uploads/2016/07/Altamira-Bison-By-Rameessos.jpg?ssl=1",
        caption: "Bison, Cave of Altamira, Spain, c. 15,000 BCE",
      },
    ],
  },
  {
    id: 2,
    name: "Ancient",
    period: "3,000 BCE–400 CE",
    color: "#b5893a",
    accent: "#faeac0",
    context:
      "Ancient art spans the great civilizations of Egypt, Mesopotamia, Greece, and Rome. These cultures used art to glorify rulers, honor gods, record history, and reflect cosmological beliefs. Art was inseparable from religion, politics, and social hierarchy, serving as both propaganda and devotion.",
    artists: [
      {
        name: "Phidias (Greek sculptor)",
        artistImage:
          "https://statue-decor.com/cdn/shop/articles/Statue_51.png?v=1651404488",
      },
      {
        name: "Praxiteles (Greek sculptor)",
        artistImage:
          "https://www.prints-online.com/p/164/praxiteles-ancient-greek-sculptor-40151398.jpg.webp",
      },
      {
        name: "Imhotep (Egyptian architect)",
        artistImage:
          "https://c8.alamy.com/comp/HRP5NB/imhotep-egyptian-polymath-HRP5NB.jpg",
      },
    ],
    characteristics: [
      "Hierarchical scale — important figures depicted larger",
      "Egyptian flat profile with combined frontal and side views",
      "Greek idealization of the human body (contrapposto)",
      "Roman portraiture with individualized realism",
    ],
    evolution:
      "Ancient art progressed from rigid, symbolic Egyptian conventions through the idealized naturalism of Classical Greece to the pragmatic realism of Rome. Each civilization built upon earlier traditions while adapting art to serve distinct cultural and political purposes. Greek innovations in proportion and the idealized human form set the standard for Western art.",
    elements: ["Proportion", "Hierarchy", "Idealization", "Symbolism", "Order"],
    sampleImages: [
      {
        src: "https://study.com/cimages/multimages/16/nefertiti_bust_center_view2626929982769893818.jpg",
        caption: "Bust of Nefertiti, Ancient Egypt, c. 1345 BCE",
      },
      {
        src: "https://brewminate.com/wp-content/uploads/2019/07/071719-48-History-Art-Greek-Greece-Nike-Samothrace.jpg",
        caption: "Winged Victory of Samothrace, Greece, c. 190 BCE",
      },
    ],
  },
  {
    id: 3,
    name: "Medieval",
    period: "400–1400",
    color: "#6a4e8a",
    accent: "#ddd0f8",
    context:
      "Medieval art was produced in Europe and Byzantium under the powerful influence of the Christian Church. Art served as a visual Bible for largely illiterate populations, communicating religious doctrine through iconography, illuminated manuscripts, stained glass, and monumental architecture.",
    artists: [
      {
        name: "Cimabue",
        artistImage:
          "https://uploads8.wikiart.org/images/cimabue.jpg!Portrait.jpg",
      },
      {
        name: "Giotto di Bondone",
        artistImage:
          "https://upload.wikimedia.org/wikipedia/commons/7/79/Five_Famous_Men_of_the_Florentine_Renaissance%2C_Giotto_%28cropped%29.jpg",
      },
      {
        name: "Hildegard of Bingen",
        artistImage:
          "https://cdn.britannica.com/69/202069-050-99D1EBE2/St-Hildegard.jpg",
      },
    ],
    characteristics: [
      "Flat, two-dimensional figures without realistic depth",
      "Gold backgrounds symbolizing divine light",
      "Hierarchical composition — Christ and saints depicted largest",
      "Rich symbolic use of color (blue for Virgin Mary, red for martyrs)",
    ],
    evolution:
      "Medieval art transitioned from the flat, stylized abstraction of early Byzantine icons toward the emerging naturalism of proto-Renaissance masters like Giotto. As the Gothic era progressed, architecture soared upward with pointed arches and flying buttresses, flooding interiors with stained-glass light. Giotto's introduction of emotional expression and spatial depth marked the beginning of the shift toward the Renaissance.",
    elements: ["Symbolism", "Gold Ground", "Flatness", "Hierarchy", "Devotion"],
    sampleImages: [
      {
        src: "https://cdnarautos.s3.amazonaws.com/sites/2/2023/07/R260-5-D-DIV_GIOTTO-O-beijo-de-Judas-696x502.jpg",
        caption:
          "Kiss of Judas by Giotto di Bondone, Scrovegni Chapel, c. 1305",
      },
      {
        src: "https://www.worldhistory.org/img/r/p/1500x1500/9319.jpg",
        caption: "North Rose Window, Chartres Cathedral, France, c. 1235",
      },
    ],
  },
  {
    id: 4,
    name: "Renaissance",
    period: "1400–1600",
    color: "#c9a96e",
    accent: "#f5e6c8",
    context:
      "The Renaissance emerged in Europe during a period of renewed interest in classical Greek and Roman knowledge. Advances in science, anatomy, and mathematics influenced artists, especially through linear perspective and realism. Art shifted away from purely religious symbolism toward human-centered representation.",
    artists: [
      {
        name: "Leonardo da Vinci",
        artistImage:
          "https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg?resize=1800:*",
      },
      {
        name: "Michelangelo",
        artistImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg/250px-Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg",
      },
      {
        name: "Raphael",
        artistImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dnYayvU1bPbiR9RFfSODoruFCZfFq26LVSYKCF_cPXbIMfnLbLsYhgBpwdE2Qr9hb63Z_K0G9PytOWHvaXyvSVtNMK3ysYq9sl-yJJrzYg&s=10",
      },
    ],
    characteristics: [
      "Realistic human anatomy",
      "Linear perspective for depth",
      "Balanced and symmetrical compositions",
      "Natural lighting and shading (chiaroscuro)",
    ],
    evolution:
      "During this period, proportion and balance became essential. Artists applied mathematical accuracy to space and form, creating harmony and unity. Line and form were controlled and precise, emphasizing realism and ideal beauty.",
    elements: ["Proportion", "Balance", "Line", "Form", "Space"],
    sampleImages: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6V5HBQRG8L3gHM8OXBjVsf39WKAlkopH5GwrSP7O2vLRgWfPapzq1ouV3_sFTeMQ32a_LjVZUzCq8P9vnhUKhJhLdaAbtOxIln8sYBA&s=10",
        caption: "The Last Supper by Leonardo da Vinci, 1495–1498",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
        caption: "The School of Athens by Raphael, 1509–1511",
      },
    ],
  },
  {
    id: 5,
    name: "Baroque",
    period: "1600–1750",
    color: "#8b4513",
    accent: "#f0d0a0",
    context:
      "Baroque art developed during times of political power and religious conflict, especially the Counter-Reformation. Art became more emotional and dramatic, meant to inspire awe and devotion.",
    artists: [
      {
        name: "Caravaggio",
        artistImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgU-xa0D756TjgLd0VrsxFOOYC-3dV1Bg_TDHf04-lWJIDOYRAfEfbEJwIQP5GDcTvBSi7x5OiwVg-wvPf9XrZtojD3X-nfHUYiqeZvR5&s=10",
      },
      {
        name: "Rembrandt",
        artistImage:
          "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRBTB2RKPGcYVDHxSoOrMrR-Vu1FdyGxseloEcQUB5Jr0daaDQXXQS059i_ODg6boIMTYzQgMMo_pvXFj7LKXC7ZBUFPay8q44AYGGTrw77qJXJhxrJmu5yb3foL6VpigHVmQzCrTCVfy8&s=19",
      },
      {
        name: "Peter Paul Rubens",
        artistImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Sir_Peter_Paul_Rubens_-_Portrait_of_the_Artist_-_Google_Art_Project.jpg/960px-Sir_Peter_Paul_Rubens_-_Portrait_of_the_Artist_-_Google_Art_Project.jpg",
      },
    ],
    characteristics: [
      "Strong contrast between light and dark",
      "Dramatic movement and intense emotion",
      "Diagonal compositions",
      "Rich, deep colors",
    ],
    evolution:
      "The Baroque period emphasized contrast, movement, and emphasis. Light was used as a tool to guide the viewer's eye, while asymmetry replaced Renaissance balance. Space became more dynamic and theatrical.",
    elements: ["Contrast", "Movement", "Emphasis", "Light", "Drama"],
    sampleImages: [
      {
        src: "https://primematters.com/sites/default/files/styles/article/public/2020-08/caravaggio-the-calling-of-st-matthew-1200x800-wikimedia-public-domain%20%281%29.jpg?h=10d202d3&itok=ie14dxvF",
        caption: "The Calling of Saint Matthew by Caravaggio, 1599–1600",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/1280px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg",
        caption: "The Night Watch by Rembrandt, 1642",
      },
    ],
  },
  {
    id: 6,
    name: "Neoclassicism",
    period: "1750–1850",
    color: "#4a7a9a",
    accent: "#c8e4f5",
    context:
      "Neoclassicism arose as a reaction against the ornate excess of Baroque and Rococo, inspired by archaeological discoveries at Pompeii and Herculaneum. It revived the order, clarity, and moral seriousness of ancient Greek and Roman art, coinciding with the Age of Enlightenment and the ideals of reason, democracy, and civic virtue.",
    artists: [
      {
        name: "Jacques-Louis David",
        artistImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9JQcZWSk0bc51ZnhqPL_QfygdxryuBAV9g&s",
      },
      {
        name: "Antonio Canova",
        artistImage:
          "https://travelswithmyart.wordpress.com/wp-content/uploads/2024/06/antonio_canova7479969940337113739.jpg?w=570",
      },
      {
        name: "Jean-Auguste-Dominique Ingres",
        artistImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ingres-autoportrait-1858_Florence.jpg/250px-Ingres-autoportrait-1858_Florence.jpg",
      },
    ],
    characteristics: [
      "Clear, precise outlines and controlled drawing",
      "Idealized, heroic human figures",
      "Historical, mythological, and civic subject matter",
      "Restrained color palette emphasizing line over color",
    ],
    evolution:
      "Neoclassicism replaced Baroque theatricality with rational restraint. Compositions became symmetrical and ordered, with figures posed in the manner of ancient sculpture. Jacques-Louis David's history paintings served as moral and political allegories, making art a vehicle for Enlightenment ideals and later Revolutionary and Napoleonic propaganda.",
    elements: ["Order", "Clarity", "Virtue", "Idealism", "Symmetry"],
    sampleImages: [
      {
        src: "https://cdn.britannica.com/01/177001-050-4B53EA01/Oath-of-the-Horatii-Jacques-Louis-David-1784.jpg",
        caption: "Oath of the Horatii by Jacques-Louis David, 1784",
      },
      {
        src: "https://live.staticflickr.com/65535/50192311921_7759fb7f02_b.jpg",
        caption: "Pauline Bonaparte as Venus Victrix by Antonio Canova, 1808",
      },
    ],
  },
  {
    id: 7,
    name: "Romanticism",
    period: "1800–1850",
    color: "#4a6741",
    accent: "#c8e0c0",
    context:
      "Romanticism arose as a reaction to the Industrial Revolution and Enlightenment rationalism. Artists focused on emotion, imagination, nature, and individual experience rather than logic and order.",
    artists: [
      {
        name: "Francisco Goya",
        artistImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWXnF5MKsRqz6wrFhGA3RZqFG8i5v5fF2MTem-Etzea48BBVHqA3esZitqLwW_vps1jF90NRk82RTiK9oTVlOVQOd6b8RM47miykWVsM&s=10",
      },
      {
        name: "J.M.W. Turner",
        artistImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTse-QUH3y3JXXo9DD2wjLg6f5d0XGkysw6Q&s",
      },
      {
        name: "Eugène Delacroix",
        artistImage:
          "https://www.theartstory.org/images20/photo/photo_delacroix_eugene_1.jpg",
      },
    ],
    characteristics: [
      "Expressive brushstrokes",
      "Dramatic landscapes and scenes",
      "Emotional intensity",
      "Emphasis on nature and the sublime",
    ],
    evolution:
      "Color and texture became more expressive. Emphasis and movement were driven by emotion rather than structure. Romantic artists broke away from strict proportion and embraced visual storytelling through mood.",
    elements: ["Color", "Texture", "Emphasis", "Movement", "Mood"],
    sampleImages: [
      {
        src: "https://artexplainedsimply.com/wp-content/uploads/2025/02/Liberty-Leading-the-People-by-Eugene-Delacroix-1-1024x576.jpg",
        caption: "Liberty Leading the People by Eugène Delacroix, 1830",
      },
      {
        src: "https://cdn.britannica.com/70/43670-050-2E1ED66F/Raft-of-the-Medusa-canvas-Theodore-Gericault-1819.jpg",
        caption: "The Raft of the Medusa by Théodore Géricault, 1818–1819",
      },
    ],
  },
  {
    id: 8,
    name: "Impressionism",
    period: "1870–1890",
    color: "#4a7fa5",
    accent: "#c0dff0",
    context:
      "Impressionism developed in response to industrialization and urban life. Artists painted everyday scenes and focused on capturing fleeting moments, especially changes in light and atmosphere.",
    artists: [
      {
        name: "Claude Monet",
        artistImage:
          "https://cdn.britannica.com/57/250457-050-342611AD/Claude-Monet-French-Impressionist-painter.jpg",
      },
      {
        name: "Pierre-Auguste Renoir",
        artistImage:
          "https://uploads4.wikiart.org/images/pierre-auguste-renoir.jpg!Portrait.jpg",
      },
      {
        name: "Edgar Degas",
        artistImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0KvGwtTOepplrf1pLB5jfFiqpkaDK3KvkQq5GYX8mP_B_PAAMUKYnjbfSVH3pENvRvW81z-KRMo1Ac-qWzeMB_SXd7Z0YUTu5wfWA3w&s=10",
      },
    ],
    characteristics: [
      "Loose, visible brushstrokes",
      "Bright, unmixed colors",
      "Outdoor (plein air) painting",
      "Ordinary subjects",
    ],
    evolution:
      "Impressionism changed how color and light were used. Instead of smooth blending, artists relied on optical mixing. Balance became more informal, and unity was achieved through repeated color and light patterns.",
    elements: ["Color", "Light", "Balance", "Unity", "Rhythm"],
    sampleImages: [
      {
        src: "https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/843,/0/default.jpg",
        caption: "Water Lilies by Claude Monet, 1906",
      },
      {
        src: "https://smarthistory.org/wp-content/uploads/2018/04/galettethumb.jpg",
        caption:
          "Dance at Le Moulin de la Galette by Pierre-Auguste Renoir, 1876",
      },
    ],
  },
  {
    id: 9,
    name: "Post-Impressionism",
    period: "1886–1905",
    color: "#7b4fa5",
    accent: "#ddc0f0",
    context:
      "Post-Impressionist artists wanted more structure, emotion, or symbolism than Impressionism allowed. Each artist developed a unique style while still building on impressionist techniques.",
    artists: [
      {
        name: "Vincent van Gogh",
        artistImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Vincent_van_Gogh_-_s0273V1962_-_Van_Gogh_Museum.jpg/960px-Vincent_van_Gogh_-_s0273V1962_-_Van_Gogh_Museum.jpg",
      },
      {
        name: "Paul Cézanne",
        artistImage:
          "https://www.paulcezanne.org/assets/img/paul-cezanne-photo.jpg",
      },
      {
        name: "Paul Gauguin",
        artistImage:
          "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydGlzdFwvaW1hZ2VGaWxlXC9nYXVndWluX2F1dG9wb3J0cmFpdF9jM2EwX2xpZG9sZS5qcGciLCJyZXNpemUsNjAwLDYwMCJdfQ.0oUtQjyCDuENteRuDeUaAgr3Opi1FGp7Y2jQMqU1w_o.jpg",
      },
    ],
    characteristics: [
      "Bold and symbolic colors",
      "Distorted forms",
      "Strong outlines and patterns",
      "Emotional or conceptual themes",
    ],
    evolution:
      "This movement pushed expression and abstraction further. Color was used symbolically, form was simplified, and proportion became less realistic. Cézanne's structured forms later influenced Cubism.",
    elements: ["Color", "Form", "Expression", "Symbolism", "Structure"],
    sampleImages: [
      {
        src: "https://galeriemontblanc.com/cdn/shop/files/Vue_Avion_cadre_noir_626f3c95-785a-46a0-824d-6961af5993bc_900x.jpg?v=1731891309",
        caption: "The Starry Night by Vincent van Gogh, 1889",
      },
      {
        src: "https://uploads4.wikiart.org/images/paul-cezanne/mont-sainte-victoire.jpg!Large.jpg",
        caption: "Mont Sainte-Victoire by Paul Cézanne, 1904–1906",
      },
    ],
  },
  {
    id: 10,
    name: "Modern Art",
    period: "1907–1965",
    color: "#5a5a7a",
    accent: "#c8c8e8",
    isGrouped: true,
    context:
      "Modern Art is an umbrella term for a cluster of radical 20th-century movements that broke decisively from representational traditions. Cubism shattered perspective, Surrealism unlocked the unconscious, and Abstract Expressionism abandoned representation entirely in favor of pure emotional gesture. Together these movements transformed the very definition of what art could be.",
    subMovements: [
      {
        name: "Cubism",
        period: "1907–1914",
        color: "#5a5a7a",
        accent: "#c8c8e8",
        description:
          "Cubism emerged alongside rapid technological and scientific change. Artists rejected traditional perspective and explored how objects could be shown from multiple viewpoints simultaneously. Pioneered by Picasso and Braque, it shattered the single viewpoint that had dominated Western art since the Renaissance.",
        artists: [
          {
            name: "Pablo Picasso",
            artistImage:
              "https://static-assets.artlogic.net/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-gdm/usr/images/artists/group_images_override/items/c8/c88dbae8a9eb4f72a80c983578aaef17/pablo-picasso.jpg",
          },
          {
            name: "Georges Braque",
            artistImage:
              "https://aegis-education.com/wp-content/uploads/2017/03/Georges-Braque-1.jpg",
          },
          {
            name: "Juan Gris",
            artistImage:
              "https://www.theartstory.org/images20/new_design/bio/bio_gris_juan.jpg",
          },
        ],
        characteristics: [
          "Fragmented geometric forms",
          "Multiple simultaneous perspectives",
          "Limited, muted color palette",
          "Flattened pictorial space",
        ],
        elements: ["Space", "Form", "Unity", "Balance", "Geometry"],
        sampleImages: [
          {
            src: "https://www.moma.org/media/W1siZiIsIjYxOTg4OCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=217eb07febfd139b",
            caption: "Les Demoiselles d'Avignon by Pablo Picasso, 1907",
          },
          {
            src: "https://www.georgesbraque.org/assets/img/paintings/violin-and-candlestick.jpg",
            caption: "Violin and Candlestick by Georges Braque, 1910",
          },
        ],
      },
      {
        name: "Surrealism",
        period: "1920s–1950s",
        color: "#6a3a8a",
        accent: "#d4b0f0",
        description:
          "Surrealism emerged from Dada and psychoanalytic theory, seeking to unlock the unconscious mind through dreamlike, irrational imagery. Influenced by Freud's theories of dreams and the unconscious, Surrealist artists used automatic writing, strange juxtapositions, and hyperrealistic depictions of impossible scenes to challenge rational thought.",
        artists: [
          {
            name: "Salvador Dalí",
            artistImage:
              "https://hips.hearstapps.com/hmg-prod/images/salvador-dali-gettyimages-2695565.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
          },
          {
            name: "René Magritte",
            artistImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ09UT2xEJFjpTbPafMtOu-n1KEhmG83MQTA&s",
          },
          {
            name: "Frida Kahlo",
            artistImage:
              "https://hips.hearstapps.com/hmg-prod/images/frida_kahlo_getty_images_451874162.jpg?crop=1xw:0.9260020554984584xh;center,top&resize=640:*",
          },
        ],
        characteristics: [
          "Dreamlike and irrational imagery",
          "Juxtaposition of unrelated objects",
          "Psychological and Freudian symbolism",
          "Hyperrealistic rendering of impossible scenes",
        ],
        elements: [
          "Dream",
          "Unconscious",
          "Juxtaposition",
          "Symbol",
          "Irrationality",
        ],
        sampleImages: [
          {
            src: "https://www.moma.org/media/W1siZiIsIjYxOTY1OSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=ef9155183ab6bba1",
            caption: "The Persistence of Memory by Salvador Dalí, 1931",
          },
          {
            src: "https://cdn.britannica.com/75/261475-050-84DBD901/the-treachery-of-images-rene-magritte-centre-pompidou-paris-france-retrospective.jpg",
            caption: "The Treachery of Images by René Magritte, 1929",
          },
        ],
      },
      {
        name: "Abstract Expressionism",
        period: "1943–1965",
        color: "#8a3a3a",
        accent: "#f0b8b8",
        description:
          "Abstract Expressionism emerged in post-war New York as the first major American art movement with global influence. Reacting against the horrors of World War II, artists sought to express raw primal emotion through spontaneous, large-scale, non-representational painting. The act of painting itself — the gesture, the drip, the stroke — became the subject.",
        artists: [
          {
            name: "Jackson Pollock",
            artistImage:
              "https://artshortlist.com/files/07271946351147651.jpg",
          },
          {
            name: "Mark Rothko",
            artistImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8GJWCiqmNBhuz6OUvYxr0KNReiBvf-eSTQ&s",
          },
          {
            name: "Willem de Kooning",
            artistImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmslqBxXvbTk7jrFhKLSAfNRKc97Bwq9Hdag&s",
          },
        ],
        characteristics: [
          "Large-scale, gestural canvases",
          "Spontaneous, automatic mark-making",
          "Non-representational, abstract forms",
          "Emphasis on process, paint texture, and emotion",
        ],
        elements: ["Gesture", "Scale", "Spontaneity", "Emotion", "Process"],
        sampleImages: [
          {
            src: "https://www.jackson-pollock.org/assets/img/paintings/number-5.jpg",
            caption: "No. 5 by Jackson Pollock, 1948",
          },
          {
            src: "https://preview.redd.it/mark-rothko-untitled-1956-v0-0vwb2i59d7fa1.jpg?auto=webp&s=51bf780fea06c7f87a2fdc6d01ceedb925085cea",
            caption: "Untitled by Mark Rothko, 1956",
          },
        ],
      },
    ],
    evolution:
      "Modern Art evolved through a series of radical breaks. Cubism (1907) shattered perspective and introduced multiple simultaneous viewpoints. Surrealism (1920s) dissolved the boundary between dreams and reality. Abstract Expressionism (1940s) abandoned representation entirely, making the canvas a field for pure emotional action. Each movement pushed further from tradition, collectively transforming art from craft to concept.",
    elements: ["Abstraction", "Concept", "Gesture", "Dream", "Fragmentation"],
    artists: [
      {
        name: "Pablo Picasso",
        artistImage:
          "https://static-assets.artlogic.net/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-gdm/usr/images/artists/group_images_override/items/c8/c88dbae8a9eb4f72a80c983578aaef17/pablo-picasso.jpg",
      },
      {
        name: "Salvador Dalí",
        artistImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Portrait_of_Salvador_Dal%C3%AD_%28cropped%29.jpg/440px-Portrait_of_Salvador_Dal%C3%AD_%28cropped%29.jpg",
      },
      {
        name: "Jackson Pollock",
        artistImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jackson_Pollock_1950.jpg/440px-Jackson_Pollock_1950.jpg",
      },
    ],
    characteristics: [
      "Rejection of traditional perspective and representation",
      "Exploration of the unconscious and emotional states",
      "Radical experimentation with form, color, and technique",
      "Art as concept, gesture, and psychological expression",
    ],
    sampleImages: [],
  },
  {
    id: 11,
    name: "Contemporary Art",
    period: "1970–Present",
    color: "#3a7a5a",
    accent: "#b0e8cc",
    context:
      "Contemporary Art resists single definition by design — it is diverse, interdisciplinary, globally sourced, and often more concerned with ideas, identity, and social critique than with aesthetic beauty alone. It encompasses digital art, installation, video, performance, conceptual, and activist practices that engage with today's most pressing cultural and political questions.",
    artists: [
      {
        name: "Cindy Sherman",
        artistImage:
          "https://upload.wikimedia.org/wikipedia/commons/5/5e/Cindy_Sherman_%28cropped%29.jpg",
      },
      {
        name: "Ai Weiwei",
        artistImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Aj_Wej-wej_I_%282017%29.jpg/250px-Aj_Wej-wej_I_%282017%29.jpg",
      },
      {
        name: "Jean-Michel Basquiat",
        artistImage:
          "https://hips.hearstapps.com/hmg-prod/images/the27club-basquiat-jean-michel-raw.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
      },
    ],
    characteristics: [
      "Conceptual and idea-driven over aesthetic beauty",
      "Interdisciplinary — mixing media, technology, and performance",
      "Socially, politically, and culturally engaged",
      "Global perspectives beyond Western art traditions",
    ],
    evolution:
      "Contemporary Art has no single style — its defining feature is pluralism and self-reflection. Installation art immerses viewers in environments. Digital and AI art uses algorithms as creative tools. Street art enters public space without institutional permission. The internet has become both medium and distribution platform, globalizing art practice and dissolving the boundary between artist and audience.",
    elements: [
      "Concept",
      "Identity",
      "Technology",
      "Critique",
      "Interdisciplinarity",
    ],
    sampleImages: [
      {
        src: "https://media.tate.org.uk/art/images/work/T/T13/T13408_10.jpg",
        caption: "Sunflower Seeds by Ai Weiwei, Tate Modern, 2010",
      },
      {
        src: "https://artforframe.com/cdn/shop/articles/Graffiti_Jean-Michel_Basquiat_Eme_Freethinker_Pen_Chill_Mauerpark_Berlin-Prenzlauer_Berg.jpg?v=1753154769&width=1200",
        caption:
          "Jean-Michel Basquiat, whose Neo-Expressionism bridged street art and the gallery world",
      },
    ],
  },
];

const references = [
  "Gombrich, E. H. (2006). The Story of Art. Phaidon Press.",
  "Honour, H., & Fleming, J. (2009). A World History of Art. Laurence King Publishing.",
  "Arnason, H. H., & Mansfield, E. (2013). History of Modern Art. Pearson.",
  "The Metropolitan Museum of Art. (n.d.). Heilbrunn Timeline of Art History.",
  "Tate Gallery. (n.d.). Art Movements and Styles.",
  "MoMA. (n.d.). Modern Art Terms and Concepts.",
  "Strickland, C. (2007). The Annotated Muse: A Crash Course in the Fine Arts. Andrews McMeel.",
];

function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>
        ✕ Close
      </button>
      <img
        src={image.src}
        alt={image.caption}
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="lightbox-caption">{image.caption}</p>
    </div>
  );
}

function ArtistTooltip({ artist, accentColor }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const updatePos = (e) => setPos({ x: e.clientX, y: e.clientY });

  return (
    <span
      ref={ref}
      className="artist-item"
      style={{ borderColor: accentColor }}
      onMouseEnter={(e) => {
        setVisible(true);
        updatePos(e);
      }}
      onMouseMove={updatePos}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible((v) => !v)}
    >
      {artist.name}
      {visible && (
        <span
          className="artist-tooltip"
          style={{
            position: "fixed",
            left: pos.x + 18,
            top: pos.y - 20,
            zIndex: 9999,
          }}
        >
          <img
            src={artist.artistImage}
            alt={artist.name}
            className="tooltip-portrait"
          />
          <span className="tooltip-name" style={{ color: accentColor }}>
            {artist.name}
          </span>
        </span>
      )}
    </span>
  );
}

function SampleImageCard({ image, accentColor, onOpen }) {
  return (
    <div
      className="sample-image-card"
      style={{ borderColor: accentColor + "35" }}
      onClick={() => image.src && onOpen(image)}
    >
      <div className="sample-img-wrapper">
        <img src={image.src} alt={image.caption} className="sample-img" />
        <div className="sample-img-overlay">
          <span>View full image</span>
        </div>
      </div>
      <p className="sample-caption">{image.caption}</p>
    </div>
  );
}

function SubMovementPanel({ sub, onOpen }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sub-movement" style={{ borderColor: sub.color + "40" }}>
      <button
        className="sub-movement-header"
        onClick={() => setOpen((o) => !o)}
        style={{ color: open ? sub.accent : "rgba(255,255,255,0.75)" }}
      >
        <span className="sub-movement-dot" style={{ background: sub.color }} />
        <span className="sub-movement-name">{sub.name}</span>
        <span className="sub-movement-period">{sub.period}</span>
        <svg
          className={`sub-chevron${open ? " open" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="sub-movement-body">
          <p className="section-text sub-description">{sub.description}</p>

          <div className="sub-columns">
            <div>
              <p className="section-label">Key Artists</p>
              <div className="artists-list">
                {sub.artists.map((a) => (
                  <ArtistTooltip
                    key={a.name}
                    artist={a}
                    accentColor={sub.color}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="section-label">Characteristics</p>
              <div className="characteristics-list">
                {sub.characteristics.map((c) => (
                  <div key={c} className="char-item">
                    <span
                      className="char-dot"
                      style={{ background: sub.color }}
                    />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="elements-row" style={{ marginTop: "20px" }}>
            <p
              className="section-label"
              style={{ width: "100%", marginBottom: "10px" }}
            >
              Design Elements
            </p>
            {sub.elements.map((el) => (
              <span
                key={el}
                className="element-tag"
                style={{ borderColor: sub.color + "40", color: sub.accent }}
              >
                {el}
              </span>
            ))}
          </div>

          <div className="sample-images-section" style={{ marginTop: "24px" }}>
            <p className="section-label">Sample Works</p>
            <div className="sample-images-grid">
              {sub.sampleImages.map((img, idx) => (
                <SampleImageCard
                  key={idx}
                  image={img}
                  accentColor={sub.color}
                  onOpen={onOpen}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ArtMovements() {
  const [openCard, setOpenCard] = useState(null);
  const [refOpen, setRefOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const toggle = (id) => setOpenCard((prev) => (prev === id ? null : id));

  return (
    <div className="app">
      {lightbox && (
        <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
      )}

      <header className="hero">
        <p className="hero-label">Cabanban, Wiljoric Lander B.</p>
        <h1 className="hero-title">
          Movement <br />
          <em>Through Time</em>
        </h1>
        <p className="hero-subtitle">
          From Prehistoric caves to Contemporary galleries
        </p>
        <p className="hero-note">
          Desktop: Hover over artist names to see their portraits
          <br />
          Mobile: Tap on artist names to see their portraits
        </p>
      </header>

      <p className="timeline-label">Timeline — Select a movement to explore</p>

      <div className="cards-list">
        {movements.map((m, i) => {
          const isOpen = openCard === m.id;
          return (
            <div
              key={m.id}
              className="movement-card"
              style={isOpen ? { borderColor: m.color + "50" } : {}}
            >
              <div
                className="card-header"
                onClick={() => toggle(m.id)}
                aria-expanded={isOpen}
              >
                <span className="card-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="card-accent-bar"
                  style={{ background: m.color }}
                />
                <div className="card-title-group">
                  <div
                    className="card-name"
                    style={isOpen ? { color: m.accent } : {}}
                  >
                    {m.name}
                    {m.isGrouped && (
                      <span className="grouped-badge">
                        Cubism · Surrealism · Abstract Expressionism
                      </span>
                    )}
                  </div>
                  <div className="card-period">{m.period}</div>
                </div>
                <div className="card-artists-preview">
                  {m.artists.map((a) => a.name).join(" · ")}
                </div>
                <svg
                  className={`card-chevron${isOpen ? " open" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              <div className={`card-body${isOpen ? " open" : ""}`}>
                <div className="card-divider" />
                <div className="card-inner">
                  <div>
                    <p className="section-label">Historical Context</p>
                    <p className="section-text">{m.context}</p>
                  </div>

                  {!m.isGrouped && (
                    <div>
                      <p className="section-label">Key Artists</p>
                      <div className="artists-list">
                        {m.artists.map((a) => (
                          <ArtistTooltip
                            key={a.name}
                            artist={a}
                            accentColor={m.color}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {!m.isGrouped && (
                    <div>
                      <p className="section-label">Visual Characteristics</p>
                      <div className="characteristics-list">
                        {m.characteristics.map((c) => (
                          <div key={c} className="char-item">
                            <span
                              className="char-dot"
                              style={{ background: m.color }}
                            />
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="section-label">
                      Evolution of Elements &amp; Principles
                    </p>
                    <p className="section-text">{m.evolution}</p>
                  </div>

                  <div className="elements-row">
                    <p
                      className="section-label"
                      style={{ width: "100%", marginBottom: "10px" }}
                    >
                      Design Elements
                    </p>
                    {m.elements.map((el) => (
                      <span
                        key={el}
                        className="element-tag"
                        style={{ borderColor: m.color + "40", color: m.accent }}
                      >
                        {el}
                      </span>
                    ))}
                  </div>

                  {m.isGrouped && m.subMovements && (
                    <div className="sub-movements-section">
                      <p
                        className="section-label"
                        style={{ marginBottom: "16px" }}
                      >
                        Movements within Modern Art
                      </p>
                      {m.subMovements.map((sub) => (
                        <SubMovementPanel
                          key={sub.name}
                          sub={sub}
                          onOpen={setLightbox}
                        />
                      ))}
                    </div>
                  )}

                  {!m.isGrouped && m.sampleImages.length > 0 && (
                    <div className="sample-images-section">
                      <p className="section-label">
                        Sample Works from This Era
                      </p>
                      <div className="sample-images-grid">
                        {m.sampleImages.map((img, idx) => (
                          <SampleImageCard
                            key={idx}
                            image={img}
                            accentColor={m.color}
                            onOpen={setLightbox}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ref-section">
        <div
          className="ref-header"
          onClick={() => setRefOpen((p) => !p)}
          aria-expanded={refOpen}
        >
          <span className="ref-title">References</span>
          <svg
            style={{
              width: 18,
              height: 18,
              color: "rgba(255,255,255,0.25)",
              transform: refOpen ? "rotate(180deg)" : "none",
              transition: "transform 0.3s ease",
            }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <div className={`ref-body${refOpen ? " open" : ""}`}>
          <div className="ref-inner">
            {references.map((r, i) => (
              <p key={i} className="ref-item">
                {r}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
