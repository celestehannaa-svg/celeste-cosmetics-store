const PRODUCTS = [
// --- EYELINERS ---
{id:"blackout-babe", name:"Blackout Babe", category:"Eyeliners", price:6, description:"Intense black waterproof eyeliner", image:"images/Blackout 1.PNG", gallery:["images/Blackout 1.PNG","images/Blackout 2.jpg"]},
{id:"shock-me-blue", name:"Shock Me Blue", category:"Eyeliners", price:6, description:"Electric blue waterproof eyeliner", image:"images/Shock 1.PNG", gallery:["images/Shock 1.PNG","images/Shock 2.jpg"]},
{id:"tangerine-pop", name:"Tangerine Pop", category:"Eyeliners", price:6, description:"Bright orange waterproof eyeliner", image:"images/Tangerine 1.jpg", gallery:["images/Tangerine 1.jpg","images/Tangerine 2.jpg"]},
{id:"leaf-me-alone", name:"Leaf Me Alone", category:"Eyeliners", price:6, description:"Green waterproof eyeliner", image:"images/Leaf 1.jpg", gallery:["images/Leaf 1.jpg","images/Leaf 2.jpg"]},
{id:"lavender-love", name:"Lavender Love", category:"Eyeliners", price:6, description:"Lavender purple waterproof eyeliner", image:"images/lavender 12.jpg", gallery:["images/lavender 12.jpg","images/Lavender 2.jpg"]},
{id:"ice-queen", name:"Ice Queen", category:"Eyeliners", price:6, description:"White waterproof eyeliner", image:"images/ice 12.jpg", gallery:["images/ice 12.jpg","images/Ice 2.jpg"]},
{id:"blush-crush", name:"Blush Crush", category:"Eyeliners", price:6, description:"Pink red waterproof eyeliner", image:"images/blush crush 1.jpg", gallery:["images/blush crush 1.jpg","images/Blush 2.jpg"]},
{id:"drama-queen", name:"Drama Queen", category:"Eyeliners", price:6, description:"Hot pink waterproof eyeliner", image:"images/drama queen 1.jpg", gallery:["images/drama queen 1.jpg","images/Drama 2.jpg"]},
{id:"cinnamon-eyes", name:"Cinnamon Eyes", category:"Eyeliners", price:6, description:"Brown waterproof eyeliner", image:"images/Cinnamon 1.jpg", gallery:["images/Cinnamon 1.jpg","images/Cinnamon 2.jpg"]},
{id:"barbie-mood", name:"Barbi\u0065 Mood", category:"Eyeliners", price:6, description:"Baby pink waterproof eyeliner", image:"images/Barbie 1.jpg", gallery:["images/Barbie 1.jpg","images/Barbie 2.jpg"]},
{id:"sky-baby", name:"Sky Baby", category:"Eyeliners", price:6, description:"Light blue waterproof eyeliner", image:"images/Sky 1.jpg", gallery:["images/Sky 1.jpg","images/Sky 2.jpg"]},
// --- LIP GLOSS ---
{id:"georgia-peach-lipgloss", name:"Georgia Peach - LipGloss", category:"Lip Gloss", price:10, description:"Peach glossy lip gloss", image:"images/georgia_peach_one.jpg", gallery:["images/georgia_peach_one.jpg","images/georgia_peach_2nd.jpg"]},
{id:"skin-lipgloss", name:"Skin - LipGloss", category:"Lip Gloss", price:10, description:"Nude glossy lip gloss", image:"images/Skin 1.jpg", gallery:["images/Skin 1.jpg","images/skin_2nd.jpg"]},
{id:"deep-lipgloss", name:"Deep - LipGloss", category:"Lip Gloss", price:10, description:"Deep red glossy lip gloss", image:"images/Deep 1.jpg", gallery:["images/Deep 1.jpg","images/Deep 2.png"]},
{id:"bombshell-lipgloss", name:"BombShell - LipGloss", category:"Lip Gloss", price:10, description:"Peachy nude glossy lip gloss", image:"images/bombshell_one.jpg", gallery:["images/bombshell_one.jpg","images/bombshell_2nd.jpg"]},
{id:"magic-lipgloss", name:"Magic - LipGloss", category:"Lip Gloss", price:10, description:"Light pink glossy lip gloss", image:"images/magic_lip_gloss.jpg", gallery:["images/magic_lip_gloss.jpg","images/magic_2nd.jpg"]},
{id:"pisces-lipgloss", name:"Pisces - LipGloss", category:"Lip Gloss", price:12, description:"Caramel glossy lip gloss", image:"images/Picses_1st.jpg", gallery:["images/Picses_1st.jpg","images/Pisces_2nd.jpg"]},
{id:"mysterious-lipgloss", name:"Mysterious - LipGloss", category:"Lip Gloss", price:10, description:"Clear shimmer glossy lip gloss", image:"images/mysterious_1st.jpg", gallery:["images/mysterious_1st.jpg","images/Mysterious 2.png"]},
{id:"miss-lady-lipgloss", name:"Miss Lady - LipGloss", category:"Lip Gloss", price:10, description:"Bright red glossy lip gloss", image:"images/Miss_Lady_1st.jpg", gallery:["images/Miss_Lady_1st.jpg","images/Miss_Lady_2nd.jpg"]},
{id:"aurora-crystal-lipgloss", name:"Aurora Crystal - LipGloss", category:"Lip Gloss", price:10, description:"Crystal clear glossy lip gloss", image:"images/aurora_crystal_1st.jpg", gallery:["images/aurora_crystal_1st.jpg","images/crystal_clear_2nd.jpg"]},
{id:"sweet-mystery-lipgloss", name:"Sweet Mystery - LipGloss", category:"Lip Gloss", price:12, description:"Hot pink glossy lip gloss", image:"images/Sweet_Mystery_1st.jpg", gallery:["images/Sweet_Mystery_1st.jpg","images/Sweet_Mystery_2nd.jpg"]},
// --- LIP MATTE ---
{id:"bomb-lipmatte", name:"Bomb - LipMatte", category:"Lip Matte", price:9, description:"Red matte liquid lipstick", image:"images/bomb_with_box.jpg", gallery:["images/bomb_with_box.jpg","images/bomb_with_no_box.jpg"]},
{id:"icy-lipmatte", name:"Icy - LipMatte", category:"Lip Matte", price:9, description:"Pink mauve matte liquid lipstick", image:"images/Icy_-_box.jpg", gallery:["images/Icy_-_box.jpg","images/Icy_with_no_box.jpg"]},
{id:"ginger-lipmatte", name:"Ginger - LipMatte", category:"Lip Matte", price:9, description:"Warm nude matte liquid lipstick", image:"images/ginger_with_box.jpg", gallery:["images/ginger_with_box.jpg","images/Ginger_with_no_box.jpg"]},
{id:"quiet-lipmatte", name:"Quiet - LipMatte", category:"Lip Matte", price:9, description:"Soft peach matte liquid lipstick", image:"images/quiet_with_box.jpg", gallery:["images/quiet_with_box.jpg","images/Quiet_-_no_box.jpg"]},
{id:"bawse-lipmatte", name:"Bawse - LipMatte", category:"Lip Matte", price:9, description:"Dusty mauve matte liquid lipstick", image:"images/Bawsewithbox.jpg", gallery:["images/Bawsewithbox.jpg","images/Bawsewithnobox.jpg"]},
{id:"liquid-fire-lipmatte", name:"Liquid Fire - LipMatte", category:"Lip Matte", price:9, description:"Deep plum matte liquid lipstick", image:"images/Liquidfirebox.jpg", gallery:["images/Liquidfirebox.jpg","images/liquidfirewitnobox.jpg"]},
{id:"adele-19-lipmatte", name:"19 - LipMatte", category:"Lip Matte", price:9, description:"Nude beige matte liquid lipstick", image:"images/Adele19withbox.jpg", gallery:["images/Adele19withbox.jpg","images/Adele19withnobox.jpg"]},
{id:"candid-lipmatte", name:"Candid - LipMatte", category:"Lip Matte", price:9, description:"Rosy nude matte liquid lipstick", image:"images/Candidwithbox.jpg", gallery:["images/Candidwithbox.jpg","images/Candidwithnobox.jpg"]},
{id:"abigael-lipmatte", name:"Abigael - LipMatte", category:"Lip Matte", price:9, description:"Pink matte liquid lipstick", image:"images/Abigaelwithbox.jpg", gallery:["images/Abigaelwithbox.jpg","images/Abigaelwitnobox.jpg"]},
// --- CONCEALER - 4 PHOTOS ---
{id:"celeste-concealer", name:"C\u0065lest\u00e9's Multi-Use Concealer", category:"Concealers", price:10, description:"Multi-use concealer, full coverage. Choose your shade.", image:"images/Concealer 1.png", gallery:["images/Concealer 1.png","images/Concealer 2.png","images/Concealer 3.png","images/Concealer 4.png"], variants:["01","02","05","07","12","19"], variantLabel:"Shade"},
// --- OTHER ---
{id:"lash-architect-4d", name:"C\u0065lest\u00e9 Lash Architect 4D", category:"Mascara", price:9, description:"24H waterproof fiber mascara, 4D volume", image:"images/Mascara 1.jpg", gallery:["images/Mascara 1.jpg","images/Mascara 2.jpg","images/Mascara 3.jpg"]},
{id:"beauty-blender", name:"C\u0065lest\u00e9 Beauty Blender Sponge", category:"Tools", price:6, description:"Soft beauty blender sponge for flawless blending", image:"images/Sponge 1 copy.png", gallery:["images/Sponge 1 copy.png","images/Sponge 2.png","images/Sponge 3.png"]},
{id:"eyeliner-stickers", name:"C\u0065lest\u00e9 Eyeliner Stickers", category:"Tools", price:1.5, description:"Easy stick-on eyeliner stickers", image:"images/Stickers cover .jpg", gallery:["images/Stickers cover .jpg","images/Stickers 1.jpg","images/Stickers 2.png"]},
// --- HIGHLIGHTERS ---
{id:"mermaid-glow", name:"C\u0065lest\u00e9 Mermaid Glow", category:"Highlighters", price:17, description:"The Ultimate Chameleon Effect - magic in a single swipe, rainbow shimmer highlighter", image:"images/Mermaid 1.jpg", gallery:["images/Mermaid 1.jpg","images/Mermaid 2.jpg"]},
{id:"crystal-diamond", name:"C\u0065lest\u00e9 Crystal Diamond", category:"Highlighters", price:13, description:"Blinding Diamond Reflects - micro-crystalline glitter, intense sparkle highlighter", image:"images/Crystal 1.jpg", gallery:["images/Crystal 1.jpg","images/Crystal 2.jpg"]},
];
