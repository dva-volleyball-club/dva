class FlagSVG {
    static vietnam() {
    return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <!-- Red background -->
        <rect width="24" height="18" fill="#DA251D"/>
        
        <!-- Yellow star (5-pointed) -->
        <g fill="#FFCD00">
            <polygon points="12,5 12.7,7.5 15.4,7.5 13.3,9.1 14,11.6 12,10 10,11.6 10.7,9.1 8.6,7.5 11.3,7.5"/>
        </g>
    </svg>`;
}

static korea() {
    return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <!-- Background -->
        <rect width="24" height="18" fill="#FFFFFF"/>
        
        <!-- Taegeuk (Red and Blue circle) -->
        <circle cx="12" cy="9" r="3.5" fill="#C60C30"/>
        <path d="M 12 5.5 A 3.5 3.5 0 0 1 12 12.5 A 1.75 1.75 0 0 0 12 9 A 1.75 1.75 0 0 1 12 5.5 Z" fill="#003478"/>
        <circle cx="12" cy="7.25" r="1.75" fill="#C60C30"/>
        <circle cx="12" cy="10.75" r="1.75" fill="#003478"/>
        
        <!-- Trigrams -->
        <!-- Top left (☰ Geon - Heaven) -->
        <g transform="translate(4.5, 3.5) rotate(-56 0 0)">
            <rect x="-1.5" y="0" width="3" height="0.5" fill="#000000"/>
            <rect x="-1.5" y="0.9" width="3" height="0.5" fill="#000000"/>
            <rect x="-1.5" y="1.8" width="3" height="0.5" fill="#000000"/>
        </g>
        
        <!-- Top right (☵ Gam - Water) -->
        <g transform="translate(19.5, 3.5) rotate(56 0 0)">
            <rect x="-1.5" y="0" width="3" height="0.5" fill="#000000"/>
            <rect x="-1.5" y="0.9" width="0.7" height="0.5" fill="#000000"/>
            <rect x="0.8" y="0.9" width="0.7" height="0.5" fill="#000000"/>
            <rect x="-1.5" y="1.8" width="3" height="0.5" fill="#000000"/>
        </g>
        
        <!-- Bottom left (☲ Ri - Fire) -->
        <g transform="translate(4.5, 14.5) rotate(-124 0 0)">
            <rect x="-1.5" y="0" width="0.7" height="0.5" fill="#000000"/>
            <rect x="0.8" y="0" width="0.7" height="0.5" fill="#000000"/>
            <rect x="-1.5" y="0.9" width="3" height="0.5" fill="#000000"/>
            <rect x="-1.5" y="1.8" width="0.7" height="0.5" fill="#000000"/>
            <rect x="0.8" y="1.8" width="0.7" height="0.5" fill="#000000"/>
        </g>
        
        <!-- Bottom right (☷ Gon - Earth) -->
        <g transform="translate(19.5, 14.5) rotate(124 0 0)">
            <rect x="-1.5" y="0" width="0.7" height="0.5" fill="#000000"/>
            <rect x="0.8" y="0" width="0.7" height="0.5" fill="#000000"/>
            <rect x="-1.5" y="0.9" width="0.7" height="0.5" fill="#000000"/>
            <rect x="0.8" y="0.9" width="0.7" height="0.5" fill="#000000"/>
            <rect x="-1.5" y="1.8" width="0.7" height="0.5" fill="#000000"/>
            <rect x="0.8" y="1.8" width="0.7" height="0.5" fill="#000000"/>
        </g>
    </svg>`;
}

static kazakhstan() {
    return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <!-- Background -->
        <rect width="24" height="18" fill="#00AFCA"/>
        
        <!-- Ornamental pattern (left side) -->
        <rect x="0" y="0" width="1.5" height="18" fill="#FEC50C"/>
        <g fill="#FEC50C">
            <rect x="1.5" y="1" width="1" height="1"/>
            <rect x="1.5" y="3.5" width="1" height="1"/>
            <rect x="1.5" y="6" width="1" height="1"/>
            <rect x="1.5" y="8.5" width="1" height="1"/>
            <rect x="1.5" y="11" width="1" height="1"/>
            <rect x="1.5" y="13.5" width="1" height="1"/>
            <rect x="1.5" y="16" width="1" height="1"/>
        </g>
        
        <!-- Sun with 32 rays -->
        <circle cx="12" cy="6.5" r="2" fill="#FEC50C"/>
        <g fill="#FEC50C">
            <!-- 32 rays in 8 directions, 4 per direction -->
            <!-- Top -->
            <rect x="11.8" y="2.5" width="0.4" height="2" rx="0.2"/>
            <rect x="11.7" y="2.8" width="0.6" height="1.5" rx="0.2" opacity="0.8"/>
            <!-- Top-right -->
            <rect x="13.2" y="3.2" width="0.4" height="1.8" rx="0.2" transform="rotate(45 13.4 4.1)"/>
            <rect x="13.5" y="3.5" width="0.5" height="1.5" rx="0.2" transform="rotate(45 13.75 4.25)" opacity="0.8"/>
            <!-- Right -->
            <rect x="16" y="6.3" width="2" height="0.4" rx="0.2"/>
            <rect x="15.7" y="6.2" width="1.5" height="0.6" rx="0.2" opacity="0.8"/>
            <!-- Bottom-right -->
            <rect x="14.4" y="8.5" width="0.4" height="1.8" rx="0.2" transform="rotate(135 14.6 9.4)"/>
            <rect x="14.2" y="8.8" width="0.5" height="1.5" rx="0.2" transform="rotate(135 14.45 9.55)" opacity="0.8"/>
            <!-- Bottom -->
            <rect x="11.8" y="10" width="0.4" height="2" rx="0.2"/>
            <rect x="11.7" y="10.2" width="0.6" height="1.5" rx="0.2" opacity="0.8"/>
            <!-- Bottom-left -->
            <rect x="9.4" y="8.5" width="0.4" height="1.8" rx="0.2" transform="rotate(-135 9.6 9.4)"/>
            <rect x="9.3" y="8.8" width="0.5" height="1.5" rx="0.2" transform="rotate(-135 9.55 9.55)" opacity="0.8"/>
            <!-- Left -->
            <rect x="6" y="6.3" width="2" height="0.4" rx="0.2"/>
            <rect x="6.3" y="6.2" width="1.5" height="0.6" rx="0.2" opacity="0.8"/>
            <!-- Top-left -->
            <rect x="9.4" y="3.2" width="0.4" height="1.8" rx="0.2" transform="rotate(-45 9.6 4.1)"/>
            <rect x="9" y="3.5" width="0.5" height="1.5" rx="0.2" transform="rotate(-45 9.25 4.25)" opacity="0.8"/>
        </g>
        
        <!-- Steppe Eagle (large, clear wings) -->
        <g fill="#FEC50C" stroke="#FEC50C" stroke-width="0.1">
            <!-- LEFT WING (large, detailed) -->
            <path d="M 6,11 Q 7,10 8.5,10.5 Q 9.5,10.3 10.5,11 L 10,12.5 Q 9,12 8,12.2 Q 7,12.5 6,13 Z" 
                  fill="#FEC50C" stroke="#D4A017" stroke-width="0.15"/>
            <!-- Wing feathers left -->
            <path d="M 6.5,11.5 L 7,13" stroke="#D4A017" stroke-width="0.2" fill="none"/>
            <path d="M 7.5,11.3 L 8,12.8" stroke="#D4A017" stroke-width="0.2" fill="none"/>
            <path d="M 8.5,11.2 L 9,12.6" stroke="#D4A017" stroke-width="0.2" fill="none"/>
            
            <!-- RIGHT WING (large, detailed) -->
            <path d="M 18,11 Q 17,10 15.5,10.5 Q 14.5,10.3 13.5,11 L 14,12.5 Q 15,12 16,12.2 Q 17,12.5 18,13 Z" 
                  fill="#FEC50C" stroke="#D4A017" stroke-width="0.15"/>
            <!-- Wing feathers right -->
            <path d="M 17.5,11.5 L 17,13" stroke="#D4A017" stroke-width="0.2" fill="none"/>
            <path d="M 16.5,11.3 L 16,12.8" stroke="#D4A017" stroke-width="0.2" fill="none"/>
            <path d="M 15.5,11.2 L 15,12.6" stroke="#D4A017" stroke-width="0.2" fill="none"/>
            
            <!-- BODY (vertical, centered) -->
            <ellipse cx="12" cy="12" rx="1.2" ry="1.8" fill="#FEC50C"/>
            
            <!-- HEAD -->
            <circle cx="12" cy="10" r="0.7" fill="#FEC50C"/>
            
            <!-- BEAK -->
            <path d="M 12,9.8 L 12.5,10 L 12,10.2 Z" fill="#D4A017"/>
            
            <!-- EYE -->
            <circle cx="12.3" cy="9.9" r="0.1" fill="#1a1a1a"/>
            
            <!-- TAIL FEATHERS (spread fan) -->
            <path d="M 11,13.5 L 10.5,15.5 L 11,15 L 11.4,15.3 L 11.7,14.8 L 12,15.3 L 12.3,14.8 L 12.6,15.3 L 13,15 L 13.5,15.5 L 13,13.5 Z" 
                  fill="#FEC50C" stroke="#D4A017" stroke-width="0.1"/>
            
            <!-- Tail feather details -->
            <line x1="11.2" y1="13.8" x2="10.7" y2="15.2" stroke="#D4A017" stroke-width="0.15"/>
            <line x1="11.7" y1="13.8" x2="11.5" y2="15" stroke="#D4A017" stroke-width="0.15"/>
            <line x1="12" y1="13.8" x2="12" y2="15.2" stroke="#D4A017" stroke-width="0.15"/>
            <line x1="12.3" y1="13.8" x2="12.5" y2="15" stroke="#D4A017" stroke-width="0.15"/>
            <line x1="12.8" y1="13.8" x2="13.3" y2="15.2" stroke="#D4A017" stroke-width="0.15"/>
            
            <!-- Wing pattern decorations -->
            <circle cx="8" cy="11.5" r="0.3" fill="#D4A017" opacity="0.5"/>
            <circle cx="9.5" cy="11.2" r="0.25" fill="#D4A017" opacity="0.5"/>
            <circle cx="16" cy="11.5" r="0.3" fill="#D4A017" opacity="0.5"/>
            <circle cx="14.5" cy="11.2" r="0.25" fill="#D4A017" opacity="0.5"/>
        </g>
    </svg>`;
}

static pakistan() {
    return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <!-- White stripe (left) -->
        <rect x="0" y="0" width="5.5" height="18" fill="#FFFFFF"/>
        
        <!-- Green background -->
        <rect x="5.5" y="0" width="18.5" height="18" fill="#01411C"/>
        
        <!-- White crescent -->
        <g transform="translate(14.5, 9)">
            <circle cx="0" cy="0" r="3.8" fill="#FFFFFF"/>
            <circle cx="0.7" cy="-0.2" r="3.2" fill="#01411C"/>
        </g>
        
        <!-- White star (5-pointed) -->
        <g fill="#FFFFFF" transform="translate(17.2, 9)">
            <polygon points="0,-2 0.6,-0.6 2.1,-0.6 0.9,0.3 1.5,1.7 0,0.7 -1.5,1.7 -0.9,0.3 -2.1,-0.6 -0.6,-0.6"/>
        </g>
    </svg>`;
}

static canada() {
    return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <!-- Red stripe left -->
        <rect x="0" y="0" width="6" height="18" fill="#FF0000"/>
        
        <!-- White center -->
        <rect x="6" y="0" width="12" height="18" fill="#FFFFFF"/>
        
        <!-- Red stripe right -->
        <rect x="18" y="0" width="6" height="18" fill="#FF0000"/>
        
        <!-- Maple leaf -->
        <g fill="#FF0000" transform="translate(12, 9)">
            <!-- Stem -->
            <rect x="-0.25" y="3.5" width="0.5" height="2"/>
            
            <!-- Main leaf -->
            <path d="M 0,-4 L -0.8,-2 L -2.2,-2.3 L -1.3,-1 L -2.8,0 L -1.5,0.3 L -1.8,2 L -0.5,1.2 L -0.5,3.5 L 0,2.5 L 0.5,3.5 L 0.5,1.2 L 1.8,2 L 1.5,0.3 L 2.8,0 L 1.3,-1 L 2.2,-2.3 L 0.8,-2 Z"/>
        </g>
    </svg>`;
}

static mongolia() {
    return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <!-- Red stripe left -->
        <rect x="0" y="0" width="8" height="18" fill="#C4272F"/>
        
        <!-- Blue center -->
        <rect x="8" y="0" width="8" height="18" fill="#015197"/>
        
        <!-- Red stripe right -->
        <rect x="16" y="0" width="8" height="18" fill="#C4272F"/>
        
        <!-- Soyombo symbol -->
        <g fill="#FFD900" transform="translate(4, 9)">
            <!-- Fire flames (top) -->
            <polygon points="0,-5.5 -0.4,-4.7 -0.6,-5.2 -0.3,-4.5 0.3,-4.5 0.6,-5.2 0.4,-4.7"/>
            
            <!-- Sun -->
            <circle cx="0" cy="-3.5" r="0.7"/>
            <line x1="-0.9" y1="-3.5" x2="-1.2" y2="-3.5" stroke="#FFD900" stroke-width="0.2"/>
            <line x1="0.9" y1="-3.5" x2="1.2" y2="-3.5" stroke="#FFD900" stroke-width="0.2"/>
            
            <!-- Moon (crescent) -->
            <path d="M -0.9,-2.2 A 0.7 0.7 0 1 1 -0.9,-1.2 A 0.5 0.5 0 1 0 -0.9,-2.2 Z"/>
            
            <!-- Two rectangles (Righteousness) -->
            <rect x="-1" y="-0.8" width="2" height="0.7"/>
            <rect x="-1" y="0.3" width="2" height="0.7"/>
            
            <!-- Two triangles (Victory over enemies) -->
            <polygon points="-1,1.3 1,1.3 0,2.2"/>
            <polygon points="-1,2.5 1,2.5 0,3.4"/>
            
            <!-- Yin-yang symbols (Vigilance) -->
            <circle cx="-0.5" cy="4.3" r="0.35"/>
            <circle cx="0.5" cy="4.3" r="0.35"/>
            
            <!-- Bottom rectangle -->
            <rect x="-1" y="4.8" width="2" height="0.4"/>
        </g>
    </svg>`;
}

static japan() {
    return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <!-- White background -->
        <rect width="24" height="18" fill="#FFFFFF"/>
        
        <!-- Red sun (Hinomaru) - exact position and size -->
        <circle cx="12" cy="9" r="4.8" fill="#BC002D"/>
    </svg>`;
}

    // 🇧🇷 BRAZIL
    static brazil() {
        return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="18" fill="#009639"/>
            <polygon points="12,4 20,9 12,14 4,9" fill="#fedf00"/>
            <circle cx="12" cy="9" r="2.5" fill="#002776"/>
        </svg>`;
    }
    
    static russia() {
        return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="6" fill="#ffffff"/>
            <rect y="6" width="24" height="6" fill="#0039a6"/>
            <rect y="12" width="24" height="6" fill="#d52b1e"/>
        </svg>`;
    }
    
    static korea() {
        return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
            <!-- Background -->
            <rect width="24" height="18" fill="#ffffff"/>
            
            <!-- Taegeuk (Red and Blue circle) -->
            <circle cx="12" cy="9" r="3.5" fill="#C60C30"/>
            <path d="M 12 5.5 A 3.5 3.5 0 0 1 12 12.5 A 1.75 1.75 0 0 0 12 9 A 1.75 1.75 0 0 1 12 5.5 Z" fill="#003478"/>
            <circle cx="12" cy="7.25" r="1.75" fill="#C60C30"/>
            <circle cx="12" cy="10.75" r="1.75" fill="#003478"/>
            
            <!-- Trigrams -->
            <!-- Top left (☰ Geon - Heaven) -->
            <g transform="translate(4, 3) rotate(-55 0 0)">
                <rect x="-1.5" y="0" width="3" height="0.5" fill="#000000"/>
                <rect x="-1.5" y="1" width="3" height="0.5" fill="#000000"/>
                <rect x="-1.5" y="2" width="3" height="0.5" fill="#000000"/>
            </g>
            
            <!-- Top right (☵ Gam - Water) -->
            <g transform="translate(20, 3) rotate(55 0 0)">
                <rect x="-1.5" y="0" width="3" height="0.5" fill="#000000"/>
                <rect x="-1.5" y="1" width="0.6" height="0.5" fill="#000000"/>
                <rect x="0.9" y="1" width="0.6" height="0.5" fill="#000000"/>
                <rect x="-1.5" y="2" width="3" height="0.5" fill="#000000"/>
            </g>
            
            <!-- Bottom left (☲ Ri - Fire) -->
            <g transform="translate(4, 15) rotate(-125 0 0)">
                <rect x="-1.5" y="0" width="0.6" height="0.5" fill="#000000"/>
                <rect x="0.9" y="0" width="0.6" height="0.5" fill="#000000"/>
                <rect x="-1.5" y="1" width="3" height="0.5" fill="#000000"/>
                <rect x="-1.5" y="2" width="0.6" height="0.5" fill="#000000"/>
                <rect x="0.9" y="2" width="0.6" height="0.5" fill="#000000"/>
            </g>
            
            <!-- Bottom right (☷ Gon - Earth) -->
            <g transform="translate(20, 15) rotate(125 0 0)">
                <rect x="-1.5" y="0" width="0.6" height="0.5" fill="#000000"/>
                <rect x="0.9" y="0" width="0.6" height="0.5" fill="#000000"/>
                <rect x="-1.5" y="1" width="0.6" height="0.5" fill="#000000"/>
                <rect x="0.9" y="1" width="0.6" height="0.5" fill="#000000"/>
                <rect x="-1.5" y="2" width="0.6" height="0.5" fill="#000000"/>
                <rect x="0.9" y="2" width="0.6" height="0.5" fill="#000000"/>
            </g>
        </svg>`;
    }

    static kazakhstan() {
        return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
            <!-- Background -->
            <rect width="24" height="18" fill="#00AFCA"/>
            
            <!-- Ornamental pattern (left side) -->
            <rect x="0" y="0" width="1.5" height="18" fill="#FEC50C"/>
            <path d="M 1.5 2 L 2.5 2 L 2.5 4 L 1.5 4 M 1.5 6 L 2.5 6 L 2.5 8 L 1.5 8 M 1.5 10 L 2.5 10 L 2.5 12 L 1.5 12 M 1.5 14 L 2.5 14 L 2.5 16 L 1.5 16" fill="#FEC50C"/>
            
            <!-- Sun with rays -->
            <circle cx="12" cy="9" r="2.8" fill="#FEC50C"/>
            <g fill="#FEC50C">
                <path d="M 12 3 L 12.3 5.5 L 11.7 5.5 Z"/>
                <path d="M 12 15 L 12.3 12.5 L 11.7 12.5 Z"/>
                <path d="M 6 9 L 8.5 9.3 L 8.5 8.7 Z"/>
                <path d="M 18 9 L 15.5 9.3 L 15.5 8.7 Z"/>
                <path d="M 7.8 5.8 L 9.6 7.6 L 9.2 8 Z"/>
                <path d="M 16.2 12.2 L 14.4 10.4 L 14.8 10 Z"/>
                <path d="M 16.2 5.8 L 14.4 7.6 L 14.8 8 Z"/>
                <path d="M 7.8 12.2 L 9.6 10.4 L 9.2 10 Z"/>
            </g>
            
            <!-- Eagle (Steppe Eagle - simplified) -->
            <g fill="#FEC50C">
                <!-- Body -->
                <ellipse cx="12" cy="11.5" rx="1.2" ry="0.8"/>
                <!-- Wings -->
                <path d="M 10.8 11.2 Q 9.5 10.5 8.5 11 Q 9 11.5 10.2 11.8 Z"/>
                <path d="M 13.2 11.2 Q 14.5 10.5 15.5 11 Q 15 11.5 13.8 11.8 Z"/>
                <!-- Head -->
                <circle cx="12" cy="10.5" r="0.5"/>
                <!-- Tail -->
                <path d="M 11.5 12.2 L 11.8 13.5 L 12 12.2 L 12.2 13.5 L 12.5 12.2 Z"/>
            </g>
        </svg>`;
    }
    
    static india() {
        return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="6" fill="#ff9933"/>
            <rect y="6" width="24" height="6" fill="#ffffff"/>
            <rect y="12" width="24" height="6" fill="#138808"/>
            <circle cx="12" cy="9" r="1.5" fill="none" stroke="#000080" stroke-width="0.3"/>
            <circle cx="12" cy="9" r="0.5" fill="#000080"/>
        </svg>`;
    }

    static pakistan() {
    return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <!-- White stripe (left) -->
        <rect x="0" y="0" width="5" height="18" fill="#FFFFFF"/>
        
        <!-- Green background -->
        <rect x="5" y="0" width="19" height="18" fill="#01411C"/>
        
        <!-- White crescent -->
        <g transform="translate(14.5, 9)">
            <circle cx="0" cy="0" r="4" fill="#FFFFFF"/>
            <circle cx="0.8" cy="-0.3" r="3.3" fill="#01411C"/>
        </g>
        
        <!-- White star (5-pointed) -->
        <g fill="#FFFFFF" transform="translate(17, 9)">
            <polygon points="0,-2.2 0.5,-0.7 2.1,-0.7 0.8,0.3 1.3,1.8 0,0.8 -1.3,1.8 -0.8,0.3 -2.1,-0.7 -0.5,-0.7"/>
        </g>
    </svg>`;
}

static canada() {
    return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <!-- Red stripe left -->
        <rect x="0" y="0" width="6" height="18" fill="#FF0000"/>
        
        <!-- White center -->
        <rect x="6" y="0" width="12" height="18" fill="#FFFFFF"/>
        
        <!-- Red stripe right -->
        <rect x="18" y="0" width="6" height="18" fill="#FF0000"/>
        
        <!-- Maple leaf (simplified) -->
        <g fill="#FF0000" transform="translate(12, 9)">
            <!-- Center stem -->
            <rect x="-0.3" y="3" width="0.6" height="2.5"/>
            
            <!-- Main leaf body -->
            <path d="M 0,-3.5 L -1,-1.5 L -2.5,-1.8 L -1.5,-0.5 L -3,0.5 L -1.5,0.8 L -2,2.5 L -0.5,1.5 L -0.5,3 L 0,2.2 L 0.5,3 L 0.5,1.5 L 2,2.5 L 1.5,0.8 L 3,0.5 L 1.5,-0.5 L 2.5,-1.8 L 1,-1.5 Z"/>
        </g>
    </svg>`;
}

static mongolia() {
    return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <!-- Red stripe left -->
        <rect x="0" y="0" width="8" height="18" fill="#C4272F"/>
        
        <!-- Blue center -->
        <rect x="8" y="0" width="8" height="18" fill="#015197"/>
        
        <!-- Red stripe right -->
        <rect x="16" y="0" width="8" height="18" fill="#C4272F"/>
        
        <!-- Soyombo symbol (simplified) -->
        <g fill="#FFD900" transform="translate(4, 9)">
            <!-- Fire (top) -->
            <polygon points="0,-5 -0.5,-4 0.5,-4"/>
            <polygon points="-0.7,-4.2 -1,-3.5 -0.4,-3.5"/>
            <polygon points="0.7,-4.2 1,-3.5 0.4,-3.5"/>
            
            <!-- Sun -->
            <circle cx="0" cy="-2.5" r="0.8"/>
            
            <!-- Moon -->
            <path d="M -0.8,-1.2 A 0.8 0.8 0 1 1 -0.8,-0.2 A 0.5 0.5 0 1 0 -0.8,-1.2 Z"/>
            
            <!-- Two rectangles -->
            <rect x="-1" y="-0.5" width="2" height="0.8" fill="#FFD900"/>
            <rect x="-1" y="0.5" width="2" height="0.8" fill="#FFD900"/>
            
            <!-- Two triangles (earth) -->
            <polygon points="-1,1.5 1,1.5 0,2.5"/>
            <polygon points="-1,2.7 1,2.7 0,3.7"/>
            
            <!-- Yin-yang like symbols -->
            <circle cx="-0.6" cy="4.5" r="0.4"/>
            <circle cx="0.6" cy="4.5" r="0.4"/>
            
            <!-- Bottom bars -->
            <rect x="-1" y="5" width="2" height="0.3"/>
        </g>
    </svg>`;
}

static japan() {
    return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <!-- White background -->
        <rect width="24" height="18" fill="#FFFFFF"/>
        
        <!-- Red sun (Hinomaru) -->
        <circle cx="12" cy="9" r="4.5" fill="#BC002D"/>
    </svg>`;
}
    
    static default() {
        return `<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="18" fill="#666" stroke="#999" stroke-width="1"/>
            <text x="12" y="12" text-anchor="middle" fill="white" font-size="8" font-family="Arial, sans-serif">?</text>
        </svg>`;
    }

    
    static getFlag(country) {
        const method = country.toLowerCase().replace(/\s+/g, '');
        return this[method] ? this[method]() : this.default();
    }
}

/**
 * DVA Volleyball Players Module - ADVANCED SEARCH & ENHANCED FILTERS
 */

class PlayersModule {
    constructor() {
        // Prevent multiple instances
        if (window.playersModule) {
            console.log('⚠️ Players module already exists, cleaning up...');
            this.cleanup();
        }
        
        this.currentTeam = 'advanced'; // Default team
        this.filteredPlayers = [];
        this.searchTimeout = null;
        this.isInitialized = false;
        this.isDestroyed = false;
        this.filters = {
            search: '',
            position: '',
            height: '',
            country: '',
            sort: 'name'
        };
        
        console.log('🏐 Players Module constructor called');
        this.init();
    }

    async init() {
        if (this.isDestroyed) return;
        
        console.log('📚 Initializing Players Module...');
        
        try {
            await this.waitForElements();
            await this.waitForData();
            
            if (this.isDestroyed) return; // Check if destroyed during async wait
            
            this.setupRouting();
            this.bindEvents();
            this.initializeFilters();
            
            // Check initial route
            const initialTeam = this.getTeamFromRoute();
            if (initialTeam) {
                this.currentTeam = initialTeam;
                this.updateTabStates(initialTeam);
            }
            
            await this.loadTeamPlayers(this.currentTeam);
            
            if (!this.isDestroyed) {
                this.animateStats();
                this.isInitialized = true;
                console.log('✅ Players Module initialized successfully');
            }
            
        } catch (error) {
            console.error('❌ Players Module initialization failed:', error);
            this.showError(error);
        }
    }

    cleanup() {
        console.log('🧹 Cleaning up Players Module...');
        
        this.isDestroyed = true;
        this.isInitialized = false;
        
        // Clear timeouts
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = null;
        }
        
        // Remove event listeners
        const teamTabs = document.querySelectorAll('.team-tab');
        teamTabs.forEach(tab => {
            tab.replaceWith(tab.cloneNode(true));
        });
        
        // Clear data
        this.filteredPlayers = [];
        
        console.log('✅ Players Module cleaned up');
    }

    setupRouting() {
        if (this.isDestroyed) return;
        
        // Remove existing listener if any
        document.removeEventListener('playerTeamRoute', this.handleTeamRoute);
        
        // Add new listener
        this.handleTeamRoute = (e) => {
            if (this.isDestroyed) return;
            
            const team = e.detail.team;
            if (team && (team === 'middle' || team === 'advanced')) {
                console.log(`🔄 Route team switch: ${team}`);
                this.switchTeam(team, false);
            }
        };
        
        document.addEventListener('playerTeamRoute', this.handleTeamRoute);
    }

    getTeamFromRoute() {
        const hash = window.location.hash;
        if (hash.includes('/middle')) return 'middle';
        if (hash.includes('/advanced')) return 'advanced';
        return null;
    }

    async waitForElements() {
        console.log('⏳ Waiting for HTML elements...');
        
        return new Promise((resolve, reject) => {
            const maxAttempts = 50;
            let attempts = 0;
            
            const checkElements = () => {
                if (this.isDestroyed) {
                    reject(new Error('Module destroyed during wait'));
                    return;
                }
                
                attempts++;
                
                const playersGrid = document.getElementById('players-grid');
                const playersModule = document.querySelector('.dva-players');
                const teamTabs = document.querySelectorAll('.team-tab');
                
                if (playersGrid && playersModule && teamTabs.length > 0) {
                    console.log('✅ Required elements found');
                    resolve();
                } else if (attempts >= maxAttempts) {
                    console.error('❌ Elements not found after max attempts');
                    reject(new Error('Required HTML elements not found'));
                } else {
                    setTimeout(checkElements, 100);
                }
            };
            
            checkElements();
        });
    }

    async waitForData() {
        console.log('⏳ Waiting for players data...');
        
        return new Promise((resolve) => {
            const checkData = () => {
                if (this.isDestroyed) {
                    resolve(); // Don't reject, just resolve to continue cleanup
                    return;
                }
                
                if (window.playersData && window.positionColors) {
                    console.log('✅ Players data found:', {
                        middle: window.playersData.middle?.length || 0,
                        advanced: window.playersData.advanced?.length || 0
                    });
                    resolve();
                } else {
                    setTimeout(checkData, 100);
                }
            };
            
            checkData();
        });
    }

    bindEvents() {
        if (this.isDestroyed) return;
        
        console.log('🔗 Binding players events...');
        
        // Team tabs - SMOOTH SWITCHING WITHOUT PAGE RELOAD
        const teamTabs = document.querySelectorAll('.team-tab');
        teamTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                if (this.isDestroyed) return;
                
                e.preventDefault();
                e.stopPropagation();
                
                const team = e.currentTarget.getAttribute('data-team');
                console.log('Team tab clicked:', team);
                
                // Update URL without page reload
                const newUrl = `#/players/${team}`;
                window.history.pushState({}, '', newUrl);
                
                // Switch team smoothly
                this.switchTeam(team, false);
            });
        });

        // ENHANCED SEARCH WITH CLEAR BUTTON
        const searchInput = document.getElementById('player-search');
        const searchClear = document.getElementById('search-clear');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                if (this.isDestroyed) return;
                this.handleSearch(e.target.value);
            });
            
            // Add search suggestions on focus
            searchInput.addEventListener('focus', () => {
                if (searchInput.value === '') {
                    searchInput.placeholder = 'Try: "binh", "setter", "vietnam"...';
                }
            });
            
            searchInput.addEventListener('blur', () => {
                searchInput.placeholder = 'Search players by name, position, address...';
            });
            
            // Enter key search
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleSearch(e.target.value, true); // Force immediate search
                }
                if (e.key === 'Escape') {
                    this.clearSearch();
                }
            });
        }

        if (searchClear) {
            searchClear.addEventListener('click', () => {
                if (this.isDestroyed) return;
                this.clearSearch();
            });
        }

        // ENHANCED FILTERS WITH DEBUGGING
        const filterSelects = document.querySelectorAll('select[id$="-filter"]');
        console.log('🔍 Filter selects found:', filterSelects.length);
        
        filterSelects.forEach((select, index) => {
            console.log(`Filter ${index + 1}:`, {
                id: select.id,
                options: select.options.length,
                value: select.value
            });
            
            select.addEventListener('change', (e) => {
                if (this.isDestroyed) return;
                
                const filterType = e.target.id.replace('-filter', '');
                const newValue = e.target.value;
                
                console.log(`🎛️ Filter changed: ${filterType} = "${newValue}"`);
                
                this.filters[filterType] = newValue;
                this.applyFilters();
            });
            
            // Add visual feedback
            select.addEventListener('focus', () => {
                select.style.borderColor = '#FF6B35';
                select.style.boxShadow = '0 0 0 3px rgba(255, 107, 53, 0.1)';
            });
            
            select.addEventListener('blur', () => {
                select.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                select.style.boxShadow = 'none';
            });
        });

        const resetBtn = document.getElementById('reset-filters');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (this.isDestroyed) return;
                this.resetFilters();
            });
        }
        
        console.log('✅ Events bound successfully');
    }

    initializeFilters() {
        if (this.isDestroyed) return;
        
        const searchInput = document.getElementById('player-search');
        if (searchInput) searchInput.value = '';
        
        const positionFilter = document.getElementById('position-filter');
        if (positionFilter) positionFilter.value = '';
        
        const heightFilter = document.getElementById('height-filter');
        if (heightFilter) heightFilter.value = '';
        
        const countryFilter = document.getElementById('country-filter');
        if (countryFilter) countryFilter.value = '';
        
        const sortFilter = document.getElementById('sort-filter');
        if (sortFilter) sortFilter.value = 'name';
        
        // Hide clear button initially
        const searchClear = document.getElementById('search-clear');
        if (searchClear) searchClear.style.display = 'none';
        
        this.filters = {
            search: '',
            position: '',
            height: '',
            country: '',
            sort: 'name'
        };
    }

    async switchTeam(teamName, updateUrl = true) {
        if (this.isDestroyed || teamName === this.currentTeam) return;
        
        console.log(`🔄 Switching to ${teamName} team (updateUrl: ${updateUrl})`);
        
        // Update tab states immediately for smooth UX
        this.updateTabStates(teamName);
        
        // Update current team
        this.currentTeam = teamName;
        
        // Load team data
        await this.loadTeamPlayers(teamName);
        
        if (!this.isDestroyed) {
            console.log(`✅ Team switched to ${teamName}`);
        }
    }

    updateTabStates(activeTeam) {
        if (this.isDestroyed) return;
        
        const tabs = document.querySelectorAll('.team-tab');
        tabs.forEach(tab => {
            const team = tab.getAttribute('data-team');
            const isActive = team === activeTeam;
            
            // Update classes
            tab.classList.toggle('active', isActive);
            
            // Update styles
            if (isActive) {
                tab.style.background = 'rgba(255, 107, 53, 0.15)';
                tab.style.borderColor = 'rgba(255, 107, 53, 0.3)';
                tab.style.color = 'white';
            } else {
                tab.style.background = 'rgba(255, 255, 255, 0.05)';
                tab.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                tab.style.color = '#8B949E';
            }
        });
        
        console.log(`🎯 Tab states updated for ${activeTeam}`);
    }

    async loadTeamPlayers(teamName) {
    if (this.isDestroyed) return;
    
    console.log(`📥 Loading ${teamName} team players...`);
    
    // ✅ ENHANCED: Verify data exists
    console.log('📊 Data check:', {
        playersDataExists: !!window.playersData,
        teamData: window.playersData?.[teamName]?.length || 0,
        positionColorsExists: !!window.positionColors,
        availableTeams: Object.keys(window.playersData || {})
    });
    
    // ✅ CRITICAL: Handle missing data
    if (!window.playersData || !window.playersData[teamName]) {
        console.error('❌ Players data not available!');
        console.error('Available teams:', Object.keys(window.playersData || {}));
        
        // Show error to user
        const grid = document.getElementById('players-grid');
        if (grid) {
            grid.style.display = 'block';
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: white;">
                    <div style="font-size: 4rem; margin-bottom: 20px; opacity: 0.5;">⚠️</div>
                    <h3 style="font-size: 2rem; font-weight: 700; margin-bottom: 16px;">Data Not Available</h3>
                    <p style="color: #8B949E; font-size: 1.1rem; margin-bottom: 24px;">
                        Players data failed to load. Please refresh the page.
                    </p>
                    <button onclick="location.reload()" style="
                        padding: 12px 24px; 
                        background: linear-gradient(135deg, #FF6B35 0%, #FF8A65 100%); 
                        color: white; 
                        border: none; 
                        border-radius: 12px; 
                        cursor: pointer; 
                        font-weight: 600;
                        font-size: 1rem;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        🔄 Reload Page
                    </button>
                </div>
            `;
        }
        
        // Hide loading state
        const loading = document.getElementById('players-loading');
        if (loading) loading.style.display = 'none';
        
        return;
    }
    
    // Show smooth loading transition
    this.showLoadingTransition(true);
    
    // Small delay for smooth UX
    await new Promise(resolve => setTimeout(resolve, 200));
    
    if (this.isDestroyed) return;
    
    const players = window.playersData[teamName] || [];
    console.log(`📊 Found ${players.length} players for ${teamName} team`);
    
    this.filteredPlayers = [...players];
    this.applyFilters();
    
    this.showLoadingTransition(false);
}

    showLoadingTransition(show) {
        if (this.isDestroyed) return;
        
        const grid = document.getElementById('players-grid');
        const loading = document.getElementById('players-loading');
        
        if (show) {
            if (grid) {
                grid.style.opacity = '0';
                grid.style.transform = 'translateY(20px)';
            }
            if (loading) {
                loading.style.display = 'flex';
            }
        } else {
            if (loading) {
                loading.style.display = 'none';
            }
        }
    }

    // ADVANCED SEARCH METHODS
    removeDiacritics(str) {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .toLowerCase();
    }

    fuzzyMatch(name, search) {
        const nameLower = name.toLowerCase();
        const searchLower = search.toLowerCase();
        
        // Common Vietnamese name variations
        const variations = {
            'binh': ['bình'],
            'bình': ['binh'],
            'duc': ['đức'],
            'đức': ['duc'],
            'long': ['lông', 'long'],
            'lông': ['long'],
            'an': ['ân'],
            'ân': ['an'],
            'hieu': ['hiếu'],
            'hiếu': ['hieu'],
            'duy': ['duy'],
            'quan': ['quân'],
            'quân': ['quan'],
            'thanh': ['thành'],
            'thành': ['thanh'],
            'minh': ['minh'],
            'hung': ['hưng'],
            'hưng': ['hung'],
            'vu': ['vũ'],
            'vũ': ['vu'],
            'dai': ['đại'],
            'đại': ['dai'],
            'bao': ['bảo'],
            'bảo': ['bao']
        };
        
        // Check if search term matches any variation
        for (const [key, values] of Object.entries(variations)) {
            if (searchLower.includes(key)) {
                for (const variation of values) {
                    if (nameLower.includes(variation)) {
                        return true;
                    }
                }
            }
        }
        
        return false;
    }

    handleSearch(query, immediate = false) {
        if (this.isDestroyed) return;
        
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        
        // Update search clear button
        const searchClear = document.getElementById('search-clear');
        if (searchClear) {
            searchClear.style.display = query ? 'flex' : 'none';
        }
        
        const executeSearch = () => {
            if (this.isDestroyed) return;
            
            this.filters.search = query.toLowerCase().trim();
            this.applyFilters();
            
            console.log(`🔍 Search executed: "${query}" → ${this.filteredPlayers.length} results`);
        };
        
        if (immediate) {
            executeSearch();
        } else {
            // Dynamic debounce based on query length
            const delay = query.length <= 2 ? 100 : 200;
            
            this.searchTimeout = setTimeout(executeSearch, delay);
        }
    }

    clearSearch() {
        const searchInput = document.getElementById('player-search');
        const searchClear = document.getElementById('search-clear');
        
        if (searchInput) {
            searchInput.value = '';
            searchInput.focus();
        }
        if (searchClear) searchClear.style.display = 'none';
        
        this.filters.search = '';
        this.applyFilters();
        
        console.log('🧹 Search cleared');
    }

    applyFilters() {
        if (this.isDestroyed) return;
        
        let filtered = [...(window.playersData[this.currentTeam] || [])];
        console.log(`🔍 Starting filter with ${filtered.length} players`);
        
        // ADVANCED SEARCH FILTER - Support Vietnamese diacritics
        if (this.filters.search) {
            const searchTerm = this.removeDiacritics(this.filters.search);
            
            filtered = filtered.filter(player => {
                // Search in name (with diacritics support)
                const nameMatch = this.removeDiacritics(player.name).includes(searchTerm);
                
                // Search in position (with diacritics support)
                const positionMatch = this.removeDiacritics(player.position).includes(searchTerm);
                
                // Search in address (with diacritics support)
                const addressMatch = this.removeDiacritics(player.address).includes(searchTerm);
                
                // Search in country (with diacritics support)
                const countryMatch = this.removeDiacritics(player.country).includes(searchTerm);
                
                // Fuzzy matching for common Vietnamese names
                const fuzzyNameMatch = this.fuzzyMatch(player.name, this.filters.search);
                
                return nameMatch || positionMatch || addressMatch || countryMatch || fuzzyNameMatch;
            });
            
            console.log(`🔍 Search "${this.filters.search}" found ${filtered.length} results`);
        }
        
        // Apply position filter
        if (this.filters.position) {
            filtered = filtered.filter(player => 
                player.position === this.filters.position
            );
            console.log(`🎯 Position filter "${this.filters.position}" found ${filtered.length} results`);
        }
        
        // Apply height filter
        if (this.filters.height) {
            filtered = filtered.filter(player => {
                const height = parseInt(player.height);
                switch (this.filters.height) {
                    case '160-170':
                        return height >= 160 && height <= 170;
                    case '170-175':
                        return height >= 170 && height <= 175;
                    case '175-180':
                        return height >= 175 && height <= 180;
                    case '180+':
                        return height >= 180;
                    default:
                        return true;
                }
            });
            console.log(`📏 Height filter "${this.filters.height}" found ${filtered.length} results`);
        }
        
        // Apply country filter
        if (this.filters.country) {
            filtered = filtered.filter(player => 
                player.country === this.filters.country
            );
            console.log(`🌍 Country filter "${this.filters.country}" found ${filtered.length} results`);
        }
        
        // Apply sorting
        filtered = this.sortPlayers(filtered, this.filters.sort);
        
        this.filteredPlayers = filtered;
        this.renderPlayers();
        this.updateResultsCount();
        
        console.log(`✅ Final filtered results: ${filtered.length} players`);
    }

    sortPlayers(players, sortBy) {
        return players.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'number':
                    return a.number - b.number;
                case 'number-desc':
                    return b.number - a.number;
                case 'height':
                    return parseInt(a.height) - parseInt(b.height);
                case 'height-desc':
                    return parseInt(b.height) - parseInt(a.height);
                case 'age':
                    return a.age - b.age;
                case 'age-desc':
                    return b.age - a.age;
                default:
                    return 0;
            }
        });
    }

    resetFilters() {
        if (this.isDestroyed) return;
        
        console.log('🔄 Resetting all filters...');
        
        this.filters = {
            search: '',
            position: '',
            height: '',
            country: '',
            sort: 'name'
        };
        
        this.initializeFilters();
        this.applyFilters();
        
        console.log('✅ All filters reset');
    }

    renderPlayers() {
        if (this.isDestroyed) return;
        
        console.log(`🎨 Rendering ${this.filteredPlayers.length} players`);
        
        const grid = document.getElementById('players-grid');
        const empty = document.getElementById('players-empty');
        
        if (!grid) {
            console.error('❌ Players grid element not found');
            return;
        }
        
        // Show/hide empty state
        if (this.filteredPlayers.length === 0) {
            grid.style.display = 'none';
            if (empty) empty.style.display = 'block';
            return;
        } else {
            grid.style.display = 'grid';
            if (empty) empty.style.display = 'none';
        }
        
        // Render player cards
        grid.innerHTML = this.filteredPlayers.map(player => 
            this.createPlayerCard(player)
        ).join('');
        
        // Show grid with smooth animation
        setTimeout(() => {
            if (this.isDestroyed) return;
            
            grid.style.opacity = '1';
            grid.style.transform = 'translateY(0)';
            grid.classList.add('visible');
        }, 100);
    }

    createPlayerCard(player) {
    const positionColor = window.positionColors[player.position] || '#666';
    
    // SVG FLAG - Get flag SVG
    const flagSvg = FlagSVG.getFlag(player.country);
    
    // FIXED AVATAR URL - Use proper fallback
    const avatarSrc = player.avatar && player.avatar.startsWith('http') 
        ? player.avatar 
        : player.avatar && !player.avatar.includes('placeholder')
            ? player.avatar
            : `data:image/svg+xml,${encodeURIComponent(`
                <svg width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                    <rect width="140" height="140" fill="${positionColor}"/>
                    <text x="70" y="75" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="white">
                        ${player.name.split(' ').map(n => n[0]).join('')}
                    </text>
                </svg>
            `)}`;
    
    return `
        <div class="player-card" data-player-id="${player.id}" style="
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 24px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(20px);
            cursor: pointer;
        ">
            ${player.isCaptain ? '<div class="captain-badge" style="position: absolute; top: 16px; left: 16px; background: linear-gradient(135deg, #FF6B35 0%, #FF8A65 100%); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; z-index: 3;">Captain</div>' : ''}
            
            <!-- SINGLE SVG FLAG CONTAINER -->
            <div class="player-flag" style="
                position: absolute; 
                top: 16px; 
                right: 16px; 
                z-index: 3; 
                background: rgba(0, 0, 0, 0.4); 
                padding: 6px; 
                border-radius: 8px; 
                backdrop-filter: blur(10px);
                width: 32px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            ">
                ${flagSvg}
            </div>
            
            <!-- FIXED AVATAR WITH PROPER FALLBACK -->
            <div class="player-avatar-wrapper" style="
                position: relative; 
                width: 140px; 
                height: 140px; 
                margin: 0 auto 20px auto;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                transition: all 0.3s ease;
            ">
                <img src="${avatarSrc}" 
                     alt="${player.name}" 
                     class="player-avatar"
                     style="
                         width: 100%; 
                         height: 100%; 
                         object-fit: cover; 
                         object-position: center;
                         border: 3px solid rgba(255, 255, 255, 0.2); 
                         border-radius: 20px;
                         transition: all 0.3s ease;
                     "
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                
                <!-- Fallback avatar -->
                <div style="
                    display: none;
                    width: 100%;
                    height: 100%;
                    background: ${positionColor};
                    border-radius: 20px;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 24px;
                    font-weight: bold;
                    border: 3px solid rgba(255, 255, 255, 0.2);
                ">${player.name.split(' ').map(n => n[0]).join('')}</div>
            </div>
            
            <div class="player-info" style="text-align: center;">
                <h3 class="player-name" style="
                    font-size: 1.4rem; 
                    font-weight: 700; 
                    color: white; 
                    margin: 0 0 8px 0; 
                    line-height: 1.2;
                ">${player.name}</h3>
                <div class="player-position" style="
                    display: inline-block; 
                    padding: 6px 16px; 
                    border-radius: 25px; 
                    font-size: 0.85rem; 
                    font-weight: 600; 
                    text-transform: uppercase; 
                    letter-spacing: 0.5px; 
                    margin-bottom: 18px; 
                    color: white; 
                    background-color: ${positionColor};
                    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                ">
                    ${player.position}
                </div>
                
                <div class="player-stats" style="
                    display: grid; 
                    grid-template-columns: 1fr 1fr; 
                    gap: 12px; 
                    margin-top: 20px;
                ">
                    <div class="stat-item" style="
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        padding: 12px; 
                        background: rgba(0, 0, 0, 0.2); 
                        border-radius: 12px; 
                        border: 1px solid rgba(255, 255, 255, 0.05);
                    ">
                        <span style="font-size: 0.7rem; font-weight: 500; color: #8B949E; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Height</span>
                        <span style="font-size: 0.95rem; font-weight: 700; color: white;">${player.height}</span>
                    </div>
                    <div class="stat-item" style="
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        padding: 12px; 
                        background: rgba(0, 0, 0, 0.2); 
                        border-radius: 12px; 
                        border: 1px solid rgba(255, 255, 255, 0.05);
                    ">
                        <span style="font-size: 0.7rem; font-weight: 500; color: #8B949E; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Reach</span>
                        <span style="font-size: 0.95rem; font-weight: 700; color: white;">${player.reachHeight}</span>
                    </div>
                    <div class="stat-item" style="
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        padding: 12px; 
                        background: rgba(0, 0, 0, 0.2); 
                        border-radius: 12px; 
                        border: 1px solid rgba(255, 255, 255, 0.05);
                    ">
                        <span style="font-size: 0.7rem; font-weight: 500; color: #8B949E; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Joined Year</span>
                        <span style="font-size: 0.95rem; font-weight: 700; color: white;">${player.joinedYear}</span>
                    </div>
                    <div class="stat-item" style="
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        padding: 12px; 
                        background: rgba(0, 0, 0, 0.2); 
                        border-radius: 12px; 
                        border: 1px solid rgba(255, 255, 255, 0.05);
                    ">
                        <span style="font-size: 0.7rem; font-weight: 500; color: #8B949E; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Born</span>
                        <span style="font-size: 0.95rem; font-weight: 700; color: white;">${player.born}</span>
                    </div>
                </div>
                
                <div class="player-details" style="
                    margin-top: 18px; 
                    padding-top: 18px; 
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                ">
                    <div class="detail-row" style="
                        display: flex; 
                        justify-content: space-between; 
                        align-items: center; 
                        margin-bottom: 8px; 
                        font-size: 0.9rem;
                    ">
                        <span style="color: #8B949E; font-weight: 500;">🌍 Country</span>
                        <span style="color: white; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                            <div style="width: 18px; height: 13px; display: flex; align-items: center; justify-content: center;">
                                ${FlagSVG.getFlag(player.country).replace('width="24" height="18"', 'width="18" height="13"')}
                            </div>
                            ${player.country}
                        </span>
                    </div>
                    <div class="detail-row" style="
                        display: flex; 
                        justify-content: space-between; 
                        align-items: center; 
                        margin-bottom: 8px; 
                        font-size: 0.9rem;
                    ">
                        <span style="color: #8B949E; font-weight: 500;">📍 Hometown</span>
                        <span style="color: white; font-weight: 600; text-align: right;">${player.address}</span>
                    </div>
                    <div class="detail-row" style="
                        display: flex; 
                        justify-content: space-between; 
                        align-items: center; 
                        font-size: 0.9rem;
                    ">
                        <span style="color: #8B949E; font-weight: 500;">👕 Number</span>
                        <span style="color: white; font-weight: 600;">#${player.number}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}


    updateResultsCount() {
        if (this.isDestroyed) return;
        
        const countElement = document.getElementById('results-count');
        if (countElement) {
            countElement.textContent = this.filteredPlayers.length;
        }
    }

    showError(error) {
        console.error('Players Module Error:', error);
    }

    animateStats() {
        if (this.isDestroyed) return;
        
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isDestroyed) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    this.animateNumber(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        });

        statNumbers.forEach(stat => observer.observe(stat));
    }

    animateNumber(element, target) {
        if (this.isDestroyed) return;
        
        let current = 0;
        const increment = target / 30;
        
        const timer = setInterval(() => {
            if (this.isDestroyed) {
                clearInterval(timer);
                return;
            }
            
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 50);
    }
}

// =====================================
// ✅ ENHANCED MODULE MANAGEMENT - SINGLE INIT PATTERN
// =====================================

console.log('📜 Players.js loaded with SINGLE INIT pattern');

// Global flag to prevent multiple inits
let playersInitInProgress = false;

/**
 * Single initialization function - Prevents duplicate instances
 */
async function initPlayersModuleSafe() {
    // Prevent concurrent inits
    if (playersInitInProgress) {
        console.log('⏳ Players init already in progress, skipping...');
        return;
    }
    
    // Check if already initialized and working
    if (window.playersModule && 
        window.playersModule.isInitialized && 
        !window.playersModule.isDestroyed) {
        console.log('✅ Players module already initialized and working');
        return;
    }
    
    // Check if DOM is ready
    const playersContainer = document.querySelector('.dva-players');
    if (!playersContainer) {
        console.log('⏳ Players container not found, waiting...');
        return;
    }
    
    // Check if data is loaded
    if (!window.playersData || !window.positionColors) {
        console.log('⏳ Players data not loaded yet, waiting...');
        setTimeout(initPlayersModuleSafe, 200);
        return;
    }
    
    try {
        playersInitInProgress = true;
        console.log('🚀 Initializing Players Module...');
        
        // Cleanup old instance if exists
        if (window.playersModule) {
            if (typeof window.playersModule.cleanup === 'function') {
                window.playersModule.cleanup();
            }
            window.playersModule = null;
        }
        
        // Create new instance
        window.playersModule = new PlayersModule();
        
        console.log('✅ Players Module initialized successfully');
        
    } catch (error) {
        console.error('❌ Players Module initialization failed:', error);
    } finally {
        playersInitInProgress = false;
    }
}

// ✅ PRIMARY EVENT LISTENER - navigationChange
document.addEventListener('navigationChange', (e) => {
    const currentPage = e.detail?.page;
    
    console.log('📍 Navigation change detected:', currentPage);
    
    if (currentPage === 'players') {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
            initPlayersModuleSafe();
        }, 150);
    } else {
        // Cleanup when leaving players page
        if (window.playersModule && !window.playersModule.isDestroyed) {
            console.log('🧹 Cleaning up Players module (left page)');
            window.playersModule.cleanup();
            window.playersModule = null;
        }
    }
});

// ✅ INITIAL CHECK - Only if on players page on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (window.location.hash.includes('#/players')) {
            console.log('📄 DOM ready + on players page');
            setTimeout(initPlayersModuleSafe, 500);
        }
    });
} else {
    // DOM already loaded
    if (window.location.hash.includes('#/players')) {
        console.log('📄 DOM already loaded + on players page');
        setTimeout(initPlayersModuleSafe, 500);
    }
}

// ✅ HANDLE BROWSER BACK/FORWARD for team routes
window.addEventListener('popstate', () => {
    if (window.location.hash.includes('#/players')) {
        // Only handle team switching if module exists
        if (window.playersModule && !window.playersModule.isDestroyed) {
            const team = window.playersModule.getTeamFromRoute();
            if (team && team !== window.playersModule.currentTeam) {
                console.log('🔙 Browser back/forward: switching to', team);
                window.playersModule.switchTeam(team, false);
            }
        } else {
            // Module doesn't exist, init it
            initPlayersModuleSafe();
        }
    }
});

// ✅ EXPORT FOR GLOBAL ACCESS
if (typeof window !== 'undefined') {
    window.PlayersModule = PlayersModule;
    window.initPlayersModuleSafe = initPlayersModuleSafe; // For debugging
}

console.log('🔒 Players module management locked and ready');