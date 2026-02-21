import { useState, useRef } from "react";

const movements = [
  {
    id: 1,
    name: "Renaissance",
    period: "1400–1600",
    color: "#c9a96e",
    accent: "#f5e6c8",
    context:
      "The Renaissance emerged in Europe during a period of renewed interest in classical Greek and Roman knowledge. Advances in science, anatomy, and mathematics influenced artists, especially through linear perspective and realism. Art shifted away from purely religious symbolism toward human-centered representation.",
    artists: [
      {
        name: "Leonardo da Vinci",
        artistImage: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg?resize=1800:*",
      },
      {
        name: "Michelangelo",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg/250px-Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg",
      },
      {
        name: "Raphael",
        artistImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dnYayvU1bPbiR9RFfSODoruFCZfFq26LVSYKCF_cPXbIMfnLbLsYhgBpwdE2Qr9hb63Z_K0G9PytOWHvaXyvSVtNMK3ysYq9sl-yJJrzYg&s=10",
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
    id: 2,
    name: "Baroque",
    period: "1600–1750",
    color: "#8b4513",
    accent: "#f0d0a0",
    context:
      "Baroque art developed during times of political power and religious conflict, especially the Counter-Reformation. Art became more emotional and dramatic, meant to inspire awe and devotion.",
    artists: [
      {
        name: "Caravaggio",
        artistImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgU-xa0D756TjgLd0VrsxFOOYC-3dV1Bg_TDHf04-lWJIDOYRAfEfbEJwIQP5GDcTvBSi7x5OiwVg-wvPf9XrZtojD3X-nfHUYiqeZvR5&s=10",
      },
      {
        name: "Rembrandt",
        artistImage: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRBTB2RKPGcYVDHxSoOrMrR-Vu1FdyGxseloEcQUB5Jr0daaDQXXQS059i_ODg6boIMTYzQgMMo_pvXFj7LKXC7ZBUFPay8q44AYGGTrw77qJXJhxrJmu5yb3foL6VpigHVmQzCrTCVfy8&s=19",
      },
      {
        name: "Peter Paul Rubens",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Peter_Paul_Rubens_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Peter_Paul_Rubens_-_Self-Portrait_-_Google_Art_Project.jpg",
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
        src: "https://primematters.com/sites/default/files/styles/large/public/2020-08/caravaggio-the-calling-of-st-matthew-1200x800-wikimedia-public-domain%20%281%29.jpg?itok=Ha7ODCAR",
        caption: "The Calling of Saint Matthew by Caravaggio, 1599–1600",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/1280px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg",
        caption: "The Night Watch by Rembrandt, 1642",
      },
    ],
  },
  {
    id: 3,
    name: "Romanticism",
    period: "1800–1850",
    color: "#4a6741",
    accent: "#c8e0c0",
    context:
      "Romanticism arose as a reaction to the Industrial Revolution and Enlightenment rationalism. Artists focused on emotion, imagination, nature, and individual experience rather than logic and order.",
    artists: [
      {
        name: "Francisco Goya",
        artistImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWXnF5MKsRqz6wrFhGA3RZqFG8i5v5fF2MTem-Etzea48BBVHqA3esZitqLwW_vps1jF90NRk82RTiK9oTVlOVQOd6b8RM47miykWVsM&s=10",
      },
      {
        name: "J.M.W. Turner",
        artistImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTse-QUH3y3JXXo9DD2wjLg6f5d0XGkysw6Q&s",
      },
      {
        name: "Eugène Delacroix",
        artistImage: "https://www.theartstory.org/images20/photo/photo_delacroix_eugene_1.jpg",
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
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRHJBtFhhCaJZ09G5IAiw-UvVe9gj7f4wfw&s",
        caption: "Liberty Leading the People by Eugène Delacroix, 1830",
      },
      {
        src: "https://cdn.britannica.com/70/43670-050-2E1ED66F/Raft-of-the-Medusa-canvas-Theodore-Gericault-1819.jpg",
        caption: "The Raft of the Medusa by Théodore Géricault, 1818–1819",
      },
    ],
  },
  {
    id: 4,
    name: "Impressionism",
    period: "1870–1890",
    color: "#4a7fa5",
    accent: "#c0dff0",
    context:
      "Impressionism developed in response to industrialization and urban life. Artists painted everyday scenes and focused on capturing fleeting moments, especially changes in light and atmosphere.",
    artists: [
      {
        name: "Claude Monet",
        artistImage: "https://cdn.britannica.com/57/250457-050-342611AD/Claude-Monet-French-Impressionist-painter.jpg",
      },
      {
        name: "Pierre-Auguste Renoir",
        artistImage: "https://uploads4.wikiart.org/images/pierre-auguste-renoir.jpg!Portrait.jpg",
      },
      {
        name: "Edgar Degas",
        artistImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0KvGwtTOepplrf1pLB5jfFiqpkaDK3KvkQq5GYX8mP_B_PAAMUKYnjbfSVH3pENvRvW81z-KRMo1Ac-qWzeMB_SXd7Z0YUTu5wfWA3w&s=10",
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
        caption: "Dance at Le Moulin de la Galette by Pierre-Auguste Renoir, 1876",
      },
    ],
  },
  {
    id: 5,
    name: "Post-Impressionism",
    period: "1886–1905",
    color: "#7b4fa5",
    accent: "#ddc0f0",
    context:
      "Post-Impressionist artists wanted more structure, emotion, or symbolism than Impressionism allowed. Each artist developed a unique style while still building on impressionist techniques.",
    artists: [
      {
        name: "Vincent van Gogh",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Vincent_van_Gogh_-_s0273V1962_-_Van_Gogh_Museum.jpg/960px-Vincent_van_Gogh_-_s0273V1962_-_Van_Gogh_Museum.jpg",
      },
      {
        name: "Paul Cézanne",
        artistImage: "https://www.paulcezanne.org/assets/img/paul-cezanne-photo.jpg",
      },
      {
        name: "Paul Gauguin",
        artistImage: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydGlzdFwvaW1hZ2VGaWxlXC9nYXVndWluX2F1dG9wb3J0cmFpdF9jM2EwX2xpZG9sZS5qcGciLCJyZXNpemUsNjAwLDYwMCJdfQ.0oUtQjyCDuENteRuDeUaAgr3Opi1FGp7Y2jQMqU1w_o.jpg",
      },
    ],
    characteristics: [
      "Bold and symbolic colors",
      "Distorted forms",
      "Strong outlines and patterns",
      "Emotional or conceptual themes",
    ],
    evolution:
      "This movement pushed expression and abstraction further. Color was used symbolically, form was simplified, and proportion became less realistiCézanne's structured forms later influenced Cubism.",
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
    id: 6,
    name: "Cubism",
    period: "1907–1914",
    color: "#5a5a7a",
    accent: "#c8c8e8",
    context:
      "Cubism emerged alongside rapid technological and scientific change. Artists rejected traditional perspective and explored how objects could be shown from multiple viewpoints at once.",
    artists: [
      {
        name: "Pablo Picasso",
        artistImage: "https://static-assets.artlogic.net/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-gdm/usr/images/artists/group_images_override/items/c8/c88dbae8a9eb4f72a80c983578aaef17/pablo-picasso.jpg",
      },
      {
        name: "Georges Braque",
        artistImage: "https://aegis-education.com/wp-content/uploads/2017/03/Georges-Braque-1.jpg",
      },
    ],
    characteristics: [
      "Fragmented geometric forms",
      "Multiple perspectives",
      "Limited color palette",
      "Flattened space",
    ],
    evolution:
      "Cubism redefined space and form. Traditional depth disappeared, and unity was achieved through repeated shapes. Balance became analytical rather than visual, influencing modern abstract art.",
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
];

const references = [
  "Gombrich, E. H. (2006). The Story of Art. Phaidon Press.",
  "Honour, H., & Fleming, J. (2009). A World History of Art. Laurence King Publishing.",
  "Arnason, H. H., & Mansfield, E. (2013). History of Modern Art. Pearson.",
  "The Metropolitan Museum of Art. (n.d.). Heilbrunn Timeline of Art History.",
  "Tate Gallery. (n.d.). Art Movements and Styles.",
];

function ArtistTooltip({ artist, accentColor }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseEnter = (e) => { setVisible(true); updatePos(e); };
  const handleMouseMove  = (e) => { updatePos(e); };
  const updatePos        = (e) => { setPos({ x: e.clientX, y: e.clientY }); };

  return (
    <span
      ref={ref}
      className="artist-item"
      style={{ borderColor: accentColor }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setVisible(false)}
    >
      {artist.name}
      {visible && (
        <span
          className="artist-tooltip"
          style={{ position: "fixed", left: pos.x + 18, top: pos.y - 20, zIndex: 9999 }}
        >
          {artist.artistImage ? (
            <img src={artist.artistImage} alt={artist.name} className="tooltip-portrait" />
          ) : (
            <span className="tooltip-placeholder">
              <span className="tooltip-placeholder-icon">👤</span>
              <span className="tooltip-placeholder-text">
                Add portrait to<br />
                <code>artistImage</code> field<br />
                <em>{artist.name}</em>
              </span>
            </span>
          )}
          <span className="tooltip-name" style={{ color: accentColor }}>
            {artist.name}
          </span>
        </span>
      )}
    </span>
  );
}

function SampleImageCard({ image, accentColor }) {
  return (
    <div className="sample-image-card" style={{ borderColor: accentColor + "35" }}>
      {image.src ? (
        <img src={image.src} alt={image.caption} className="sample-img" />
      ) : (
        <div className="sample-img-placeholder">
          <span className="placeholder-icon">🖼</span>
          <span className="placeholder-hint">
            Replace <code>src: ""</code> in the<br />
            <code>sampleImages</code> array
          </span>
        </div>
      )}
      <p className="sample-caption">{image.caption}</p>
    </div>
  );
}

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0e0c09;
    color: #e8e0d0;
    font-family: 'Crimson Text', Georgia, serif;
    font-size: 18px;
    line-height: 1.7;
    min-height: 100vh;
  }

  .app { max-width: 1100px; margin: 0 auto; padding: 60px 32px 80px; }

  .hero {
    text-align: center;
    margin-bottom: 80px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    padding-bottom: 60px;
    position: relative;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: -20px; left: 50%; transform: translateX(-50%);
    width: 1px; height: 20px;
    background: rgba(255,255,255,0.15);
  }
  .hero-label {
    font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase;
    color: rgba(255,255,255,0.35); margin-bottom: 20px;
  }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(52px, 8vw, 96px);
    font-weight: 900; line-height: 0.95;
    color: #f0e8d8; letter-spacing: -0.02em; margin-bottom: 24px;
  }
  .hero-title em { font-style: italic; color: #c9a96e; }
  .hero-subtitle {
    font-size: 20px; font-style: italic;
    color: rgba(255,255,255,0.45); max-width: 540px; margin: 0 auto 12px;
  }
  .hero-note {
    font-size: 13px;
    color: rgba(255,255,255,0.25);
    letter-spacing: 0.05em;
    margin-top: 8px;
  }

  .timeline-label {
    font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase;
    color: rgba(255,255,255,0.25); margin-bottom: 40px;
  }

  .cards-list { display: flex; flex-direction: column; gap: 2px; }

  .movement-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 2px;
    overflow: visible;
    transition: border-color 0.25s ease;
  }
  .movement-card:hover { border-color: rgba(255,255,255,0.14); }

  .card-header {
    display: flex; align-items: center;
    padding: 28px 32px; cursor: pointer; gap: 24px; user-select: none;
  }
  .card-number {
    font-family: 'Playfair Display', serif;
    font-size: 13px; letter-spacing: 0.1em;
    color: rgba(255,255,255,0.2); min-width: 28px;
  }
  .card-accent-bar {
    width: 3px; height: 48px; border-radius: 2px;
    flex-shrink: 0; transition: height 0.3s ease;
  }
  .card-header:hover .card-accent-bar { height: 56px; }
  .card-title-group { flex: 1; }
  .card-name {
    font-family: 'Playfair Display', serif;
    font-size: 28px; font-weight: 700;
    color: #f0e8d8; line-height: 1.1;
    letter-spacing: -0.01em; transition: color 0.2s;
  }
  .card-period {
    font-size: 14px; font-style: italic;
    color: rgba(255,255,255,0.35); margin-top: 3px;
  }
  .card-artists-preview {
    font-size: 14px; color: rgba(255,255,255,0.3);
    text-align: right; max-width: 220px; line-height: 1.4;
  }
  .card-chevron {
    width: 20px; height: 20px; color: rgba(255,255,255,0.25);
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); flex-shrink: 0;
  }
  .card-chevron.open { transform: rotate(180deg); }

  .card-body {
    overflow: hidden; max-height: 0; opacity: 0;
    transition: max-height 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease;
  }
  .card-body.open { max-height: 2400px; opacity: 1; }

  .card-divider { height: 1px; background: rgba(255,255,255,0.06); margin: 0 32px 32px; }

  .card-inner {
    padding: 0 32px 40px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 40px 48px;
  }

  .section-label {
    font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase;
    color: rgba(255,255,255,0.25); margin-bottom: 12px;
  }
  .section-text { font-size: 17px; color: rgba(255,255,255,0.7); line-height: 1.75; }

  .artists-list { display: flex; flex-direction: column; gap: 8px; }

  .artist-item {
    display: inline-block;
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-style: italic;
    color: rgba(255,255,255,0.75);
    padding-left: 14px; border-left: 2px solid;
    line-height: 1.4; cursor: default;
    transition: color 0.15s;
    position: relative;
  }
  .artist-item:hover { color: #fff; }

  .artist-tooltip {
    display: flex; flex-direction: column; align-items: center;
    background: #1a1610;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 3px; overflow: hidden;
    width: 160px;
    box-shadow: 0 16px 48px rgba(0,0,0,0.8);
    pointer-events: none;
    animation: tooltipIn 0.15s ease forwards;
  }
  @keyframes tooltipIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .tooltip-portrait { width: 160px; height: 192px; object-fit: cover; display: block; }
  .tooltip-placeholder {
    width: 160px; height: 192px;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 10px;
    background: rgba(255,255,255,0.025);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .tooltip-placeholder-icon { font-size: 30px; opacity: 0.35; }
  .tooltip-placeholder-text {
    font-size: 11px; text-align: center;
    color: rgba(255,255,255,0.35); line-height: 1.6;
    font-family: 'Crimson Text', serif; font-style: normal;
  }
  .tooltip-placeholder-text code {
    font-family: 'Courier New', monospace; font-size: 10px;
    background: rgba(255,255,255,0.08); padding: 1px 4px;
    border-radius: 2px; color: rgba(255,255,255,0.55);
  }
  .tooltip-placeholder-text em {
    font-style: italic; color: rgba(255,255,255,0.55); display: block; margin-top: 4px;
  }
  .tooltip-name {
    font-family: 'Playfair Display', serif;
    font-size: 13px; font-style: italic;
    padding: 9px 12px; text-align: center; line-height: 1.3; width: 100%;
  }

  .characteristics-list { display: flex; flex-direction: column; gap: 10px; }
  .char-item {
    font-size: 16px; color: rgba(255,255,255,0.65);
    display: flex; align-items: baseline; gap: 10px;
  }
  .char-dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }

  .elements-row { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 8px; }
  .element-tag {
    font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
    padding: 6px 14px; border-radius: 1px;
    border: 1px solid rgba(255,255,255,0.12);
    background: rgba(255,255,255,0.03);
  }

  .sample-images-section { grid-column: 1 / -1; padding-top: 8px; }
  .sample-images-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 14px;
  }
  .sample-image-card {
    border: 1px solid rgba(255,255,255,0.08); border-radius: 2px;
    overflow: hidden; background: rgba(255,255,255,0.02);
    transition: border-color 0.2s;
  }
  .sample-image-card:hover { border-color: rgba(255,255,255,0.2); }
  .sample-img { width: 100%; height: 250px; object-fit: cover; display: block; }
  .sample-img-placeholder {
    width: 100%; height: 250px;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 14px;
    background: rgba(255,255,255,0.025);
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .placeholder-icon { font-size: 36px; opacity: 0.22; }
  .placeholder-hint {
    font-size: 12px; text-align: center;
    color: rgba(255,255,255,0.3); line-height: 1.75; font-style: normal;
  }
  .placeholder-hint code {
    font-family: 'Courier New', monospace; font-size: 11px;
    background: rgba(255,255,255,0.07); padding: 1px 5px;
    border-radius: 2px; color: rgba(255,255,255,0.5);
  }
  .sample-caption {
    font-size: 13px; font-style: italic;
    color: rgba(255,255,255,0.35); padding: 10px 14px; line-height: 1.4;
  }

  .ref-section {
    margin-top: 40px;
    border: 1px solid rgba(255,255,255,0.06); border-radius: 2px; overflow: hidden;
  }
  .ref-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 22px 32px; cursor: pointer; user-select: none; transition: background 0.2s;
  }
  .ref-header:hover { background: rgba(255,255,255,0.03); }
  .ref-title {
    font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase;
    color: rgba(255,255,255,0.3);
  }
  .ref-body {
    overflow: hidden; max-height: 0; opacity: 0;
    transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
  }
  .ref-body.open { max-height: 400px; opacity: 1; }
  .ref-inner { padding: 8px 32px 32px; border-top: 1px solid rgba(255,255,255,0.05); }
  .ref-item {
    font-size: 15px; color: rgba(255,255,255,0.4);
    padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
    line-height: 1.6; font-style: italic;
  }
  .ref-item:last-child { border-bottom: none; }

  @media (max-width: 768px) {
    .app { padding: 40px 20px 60px; }
    .hero { margin-bottom: 48px; padding-bottom: 40px; }
    .hero-title { font-size: clamp(40px, 10vw, 64px); }
    .hero-subtitle { font-size: 17px; }
    .card-header { padding: 20px 20px; gap: 16px; }
    .card-name { font-size: 22px; }
    .card-artists-preview { display: none; }
    .card-divider { margin: 0 20px 24px; }
    .card-inner { padding: 0 20px 32px; grid-template-columns: 1fr; gap: 28px; }
    .elements-row { grid-column: 1; }
    .sample-images-section { grid-column: 1; }
    .sample-images-grid { grid-template-columns: 1fr; }
    .ref-header { padding: 18px 20px; }
    .ref-inner { padding: 8px 20px 24px; }
  }

  @media (max-width: 480px) {
    .app { padding: 28px 14px 48px; }
    .hero { margin-bottom: 36px; padding-bottom: 32px; }
    .hero-label { font-size: 10px; letter-spacing: 0.2em; }
    .hero-title { font-size: clamp(32px, 11vw, 46px); margin-bottom: 16px; }
    .hero-subtitle { font-size: 15px; }
    .hero-note { font-size: 12px; }
    .timeline-label { font-size: 10px; margin-bottom: 24px; }
    .card-header { padding: 16px 14px; gap: 12px; }
    .card-number { font-size: 11px; min-width: 20px; }
    .card-accent-bar { height: 36px; }
    .card-name { font-size: 19px; }
    .card-period { font-size: 12px; }
    .card-chevron { width: 16px; height: 16px; }
    .card-divider { margin: 0 14px 20px; }
    .card-inner { padding: 0 14px 24px; gap: 22px; }
    .section-label { font-size: 9px; letter-spacing: 0.28em; }
    .section-text { font-size: 15px; }
    .artist-item { font-size: 16px; }
    .char-item { font-size: 14px; }
    .element-tag { font-size: 10px; padding: 5px 10px; }
    .sample-img { height: 200px; }
    .sample-img-placeholder { height: 200px; }
    .placeholder-icon { font-size: 28px; }
    .placeholder-hint { font-size: 11px; }
    .sample-caption { font-size: 12px; padding: 8px 12px; }
    .ref-header { padding: 16px 14px; }
    .ref-title { font-size: 10px; letter-spacing: 0.22em; }
    .ref-inner { padding: 8px 14px 20px; }
    .ref-item { font-size: 13px; }
  }
`;

export default function ArtMovements() {
  const [openCard, setOpenCard] = useState(null);
  const [refOpen,  setRefOpen]  = useState(false);

  const toggle = (id) => setOpenCard((prev) => (prev === id ? null : id));

  return (
    <>
      <style>{style}</style>
      <div className="app">
        <header className="hero">
          <p className="hero-label">Cabanban, Wiljoric Lander B.</p>
          <h1 className="hero-title">
            Movement <br />
            <em>Through Time</em>
          </h1>
          <p className="hero-subtitle">From Renaissance to Cubism era of arts</p>
          <p> Note: Kindly hover over artist names to see their portraits</p>
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
                  <span className="card-number">0{i + 1}</span>
                  <div className="card-accent-bar" style={{ background: m.color }} />
                  <div className="card-title-group">
                    <div className="card-name" style={isOpen ? { color: m.accent } : {}}>
                      {m.name}
                    </div>
                    <div className="card-period">{m.period}</div>
                  </div>
                  <div className="card-artists-preview">
                    {m.artists.map((a) => a.name).join(" · ")}
                  </div>
                  <svg
                    className={`card-chevron${isOpen ? " open" : ""}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
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

                    <div>
                      <p className="section-label">Key Artists</p>
                      <div className="artists-list">
                        {m.artists.map((a) => (
                          <ArtistTooltip key={a.name} artist={a} accentColor={m.color} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="section-label">Visual Characteristics</p>
                      <div className="characteristics-list">
                        {m.characteristics.map((c) => (
                          <div key={c} className="char-item">
                            <span className="char-dot" style={{ background: m.color }} />
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="section-label">Evolution of Elements &amp; Principles</p>
                      <p className="section-text">{m.evolution}</p>
                    </div>

                    <div className="elements-row">
                      <p className="section-label" style={{ width: "100%", marginBottom: "10px" }}>
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

                    <div className="sample-images-section">
                      <p className="section-label">Sample Works from This Era</p>
                      <div className="sample-images-grid">
                        {m.sampleImages.map((img, idx) => (
                          <SampleImageCard key={idx} image={img} accentColor={m.color} />
                        ))}
                      </div>
                    </div>
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
                width: 18, height: 18,
                color: "rgba(255,255,255,0.25)",
                transform: refOpen ? "rotate(180deg)" : "none",
                transition: "transform 0.3s ease",
              }}
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <div className={`ref-body${refOpen ? " open" : ""}`}>
            <div className="ref-inner">
              {references.map((r, i) => (
                <p key={i} className="ref-item">{r}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}