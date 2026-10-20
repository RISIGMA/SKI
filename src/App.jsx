import React, { useState, useEffect, useRef } from 'react';
import {
  Home,
  MessageSquare,
  CalendarCheck,
  BarChart3,
  Bell,
  Search,
  Plus,
  Clock,
  CheckCircle2,
  ChevronRight,
  Filter,
  ArrowRight,
  Calendar,
  Award,
  Sparkles,
  BookOpen,
  Sun,
  Moon,
  Flame,
  Zap,
  Star,
  Check,
  Play,
  Pause,
  RotateCcw,
  X,
  Compass,
  Crown,
  Volume2,
  VolumeX,
  Trophy,
  CheckCheck,
  Trash2
} from 'lucide-react';

// =====================================================================
// 🦋 1. KOMPONEN MASKOT EVOLUSI (4 WUJUD BERBEDA TOTAL)
// =====================================================================

// Wujud Tahap 1: Kepompong Kristal Faset (Crystal Chrysalis)
function CrystalCocoonMascot({ className = "w-48 h-48", isDark = false }) {
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cocoonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#A5F3FC" : "#E0F2FE"} />
          <stop offset="40%" stopColor={isDark ? "#06B6D4" : "#38BDF8"} />
          <stop offset="80%" stopColor={isDark ? "#0891B2" : "#0284C7"} />
          <stop offset="100%" stopColor={isDark ? "#083344" : "#082F49"} />
        </linearGradient>
        <linearGradient id="glowInner" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#22D3EE" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0E7490" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {/* Tali Sutra Penggantung */}
      <line x1="50" y1="0" x2="50" y2="22" stroke={isDark ? "#67E8F9" : "#BAE6FD"} strokeWidth="2" strokeDasharray="2 2" />
      <circle cx="50" cy="22" r="3" fill="#22D3EE" filter="drop-shadow(0 0 4px #06B6D4)" />

      {/* Badan Kepompong Kristal */}
      <path
        d="M50 24 C62 35, 70 55, 66 78 C63 95, 54 110, 50 116 C46 110, 37 95, 34 78 C30 55, 38 35, 50 24 Z"
        fill="url(#cocoonGrad)"
        stroke={isDark ? "#67E8F9" : "#E0F2FE"}
        strokeWidth="1.5"
        filter={isDark ? "drop-shadow(0 0 20px rgba(6,182,212,0.95))" : "drop-shadow(0 0 10px rgba(56,189,248,0.5))"}
      />
      {/* Inti Cahaya Kristal di Dalam */}
      <ellipse cx="50" cy="65" rx="10" ry="24" fill="url(#glowInner)" />
      
      {/* Pola Faset Garis Permata */}
      <path d="M50 24 L58 50 L50 78 L42 50 Z" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.85" />
      <path d="M58 50 L66 78 L50 78 L34 78 L42 50" stroke={isDark ? "#A5F3FC" : "#BAE6FD"} strokeWidth="0.8" strokeOpacity="0.7" />
      <path d="M50 78 L50 116" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />

      {/* Kilau Bintang Kristal */}
      <circle cx="46" cy="42" r="2.5" fill="#FFFFFF" filter="drop-shadow(0 0 4px #FFFFFF)" />
      <circle cx="55" cy="60" r="3" fill="#FFFFFF" filter="drop-shadow(0 0 4px #FFFFFF)" />
      <circle cx="48" cy="88" r="2" fill="#E0F2FE" />
    </svg>
  );
}

// Wujud Tahap 2: Morpho Muda Dedaunan (Young Emerged Morpho)
function YoungMorphoMascot({ className = "w-48 h-48", isDark = false }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="youngWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#34D399" : "#5EEAD4"} />
          <stop offset="50%" stopColor={isDark ? "#10B981" : "#14B8A6"} />
          <stop offset="100%" stopColor={isDark ? "#065F46" : "#0F766E"} />
        </linearGradient>
        <linearGradient id="youngWingSub" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#6EE7B7" : "#99F6E4"} />
          <stop offset="100%" stopColor={isDark ? "#059669" : "#0D9488"} />
        </linearGradient>
      </defs>
      {/* Sayap Hijau Mint & Toska Segar */}
      <path d="M48 48 C36 20, 14 18, 12 32 C10 48, 28 58, 48 52 Z" fill="url(#youngWingGrad)" opacity="0.95" filter={isDark ? "drop-shadow(0 0 15px rgba(16,185,129,0.7))" : ""} />
      <path d="M52 48 C64 20, 86 18, 88 32 C90 48, 72 58, 52 52 Z" fill="url(#youngWingGrad)" opacity="0.95" filter={isDark ? "drop-shadow(0 0 15px rgba(16,185,129,0.7))" : ""} />
      <path d="M48 52 C34 54, 22 66, 28 78 C35 88, 46 74, 48 56 Z" fill="url(#youngWingSub)" opacity="0.9" />
      <path d="M52 52 C66 54, 78 66, 72 78 C65 88, 54 74, 52 56 Z" fill="url(#youngWingSub)" opacity="0.9" />
      
      {/* Urat Daun pada Sayap */}
      <path d="M46 45 C32 25, 20 28, 18 36 C16 44, 28 50, 46 48" stroke="#D1FAE5" strokeWidth="1.2" opacity="0.85" />
      <path d="M54 45 C68 25, 80 28, 82 36 C84 44, 72 50, 54 48" stroke="#D1FAE5" strokeWidth="1.2" opacity="0.85" />
      
      {/* Tubuh */}
      <ellipse cx="50" cy="52" rx="2.5" ry="14" fill={isDark ? "#064E3B" : "#115E59"} />
      <ellipse cx="50" cy="36" rx="3" ry="3" fill={isDark ? "#047857" : "#0F766E"} />
      <path d="M49 34 C44 26, 38 22, 34 21" stroke={isDark ? "#34D399" : "#115E59"} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M51 34 C56 26, 62 22, 66 21" stroke={isDark ? "#34D399" : "#115E59"} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="34" cy="21" r="1.5" fill="#34D399" />
      <circle cx="66" cy="21" r="1.5" fill="#34D399" />
    </svg>
  );
}

// Wujud Tahap 3: Radiant Morpho Biru (Majestic Adult Morpho)
function RadiantMorphoMascot({ className = "w-48 h-48", isDark = false }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="radWingTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#38BDF8" : "#7DD3FC"} />
          <stop offset="50%" stopColor={isDark ? "#00F2FE" : "#38BDF8"} />
          <stop offset="100%" stopColor={isDark ? "#0284C7" : "#0284C7"} />
        </linearGradient>
        <linearGradient id="radWingBot" x1="10%" y1="20%" x2="90%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#7DD3FC" : "#BAE6FD"} />
          <stop offset="100%" stopColor={isDark ? "#0369A1" : "#0369A1"} />
        </linearGradient>
      </defs>
      <path d="M48 45 C35 15, 10 12, 8 28 C6 44, 25 55, 48 50 Z" fill="url(#radWingTop)" opacity="0.95" filter={isDark ? "drop-shadow(0 0 16px rgba(56,189,248,0.9))" : ""} />
      <path d="M52 45 C65 15, 90 12, 92 28 C94 44, 75 55, 52 50 Z" fill="url(#radWingTop)" opacity="0.95" filter={isDark ? "drop-shadow(0 0 16px rgba(56,189,248,0.9))" : ""} />
      <path d="M48 50 C32 52, 18 64, 25 78 C32 88, 46 72, 48 54 Z" fill="url(#radWingBot)" opacity="0.9" />
      <path d="M52 50 C68 52, 82 64, 75 78 C68 88, 54 72, 52 54 Z" fill="url(#radWingBot)" opacity="0.9" />

      {/* Garis Kilau Berlian Neon */}
      <path d="M45 42 C32 20, 16 22, 14 32 C12 40, 26 48, 45 46" stroke="#E0F2FE" strokeWidth="1.5" opacity="0.85" />
      <path d="M55 42 C68 20, 84 22, 86 32 C88 40, 74 48, 55 46" stroke="#E0F2FE" strokeWidth="1.5" opacity="0.85" />
      <circle cx="20" cy="28" r="2.5" fill="#FFFFFF" />
      <circle cx="80" cy="28" r="2.5" fill="#FFFFFF" />

      <ellipse cx="50" cy="50" rx="3" ry="16" fill="#0C4A6E" />
      <ellipse cx="50" cy="32" rx="3.5" ry="3.5" fill="#075985" />
      <path d="M49 30 C45 22, 40 18, 36 17" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M51 30 C55 22, 60 18, 64 17" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="36" cy="17" r="1.5" fill="#38BDF8" />
      <circle cx="64" cy="17" r="1.5" fill="#38BDF8" />
    </svg>
  );
}

// =====================================================================
// 👑 WUJUD TAHAP 4: GOLDEN EMPEROR (DI-DESAIN ULANG: JAUH LEBIH MEWAH!)
// Bentuk sayap Swallowtail Kaisar 4-lapis, lingkaran halo surya, & mahkota kerajaan
// =====================================================================
function GoldenEmperorMascot({ className = "w-48 h-48", isDark = false }) {
  return (
    <svg viewBox="0 0 120 135" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Gradien Emas Kaisar 24 Karat */}
        <linearGradient id="imperialGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="25%" stopColor="#FDE047" />
          <stop offset="60%" stopColor="#F59E0B" />
          <stop offset="90%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id="imperialGoldSecondary" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="haloSunburst" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 1. Lingkaran Cahaya Surya Magis (Solar Halo Sunburst) di Belakang */}
      <circle cx="60" cy="55" r="42" fill="url(#haloSunburst)" />
      <circle cx="60" cy="55" r="36" stroke="#FDE047" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

      {/* 2. Mahkota Kerajaan Emas Megah Berpermata Ruby di Atas Kepala */}
      <g filter="drop-shadow(0 0 10px rgba(251,191,36,0.9))">
        <path d="M50 16 L54 26 L60 18 L66 26 L70 16 L68 30 L52 30 Z" fill="#FDE047" stroke="#B45309" strokeWidth="0.8" />
        <circle cx="50" cy="15" r="2" fill="#FEF08A" />
        <circle cx="60" cy="17" r="2.5" fill="#EF4444" /> {/* Permata Ruby Merah */}
        <circle cx="70" cy="15" r="2" fill="#FEF08A" />
      </g>

      {/* 3. Sayap Belakang Swallowtail Panjang Melengkung Khas Kaisar (Beda Total dari Morpho!) */}
      {/* Ekor Sayap Kiri Swallowtail */}
      <path
        d="M58 60 C38 65, 18 78, 22 96 C24 105, 34 116, 38 128 C42 122, 40 106, 50 90 C56 82, 58 70, 58 60 Z"
        fill="url(#imperialGoldSecondary)"
        stroke="#FEF08A"
        strokeWidth="1.2"
        filter={isDark ? "drop-shadow(0 0 14px rgba(245,158,11,0.8))" : ""}
      />
      {/* Ekor Sayap Kanan Swallowtail */}
      <path
        d="M62 60 C82 65, 102 78, 98 96 C96 105, 86 116, 82 128 C78 122, 80 106, 70 90 C64 82, 62 70, 62 60 Z"
        fill="url(#imperialGoldSecondary)"
        stroke="#FEF08A"
        strokeWidth="1.2"
        filter={isDark ? "drop-shadow(0 0 14px rgba(245,158,11,0.8))" : ""}
      />

      {/* 4. Sayap Depan Bertingkat Berlapis Emas Kaisar (Scalloped Wings) */}
      {/* Sayap Depan Kiri */}
      <path
        d="M58 52 C42 16, 12 12, 6 28 C2 44, 18 64, 40 68 C48 70, 56 62, 58 52 Z"
        fill="url(#imperialGoldMain)"
        stroke="#FFFBEB"
        strokeWidth="1.8"
        filter={isDark ? "drop-shadow(0 0 20px rgba(251,191,36,0.9))" : "drop-shadow(0 0 10px rgba(245,158,11,0.4))"}
      />
      {/* Sayap Depan Kanan */}
      <path
        d="M62 52 C78 16, 108 12, 114 28 C118 44, 102 64, 80 68 C72 70, 64 62, 62 52 Z"
        fill="url(#imperialGoldMain)"
        stroke="#FFFBEB"
        strokeWidth="1.8"
        filter={isDark ? "drop-shadow(0 0 20px rgba(251,191,36,0.9))" : "drop-shadow(0 0 10px rgba(245,158,11,0.4))"}
      />

      {/* 5. Ukiran Ornamen Filigree & Sisik Emas Mengkilap pada Sayap */}
      <path d="M54 48 C36 24, 18 26, 14 36 C12 46, 26 56, 48 54" stroke="#FFFBEB" strokeWidth="2" opacity="0.95" />
      <path d="M66 48 C84 24, 102 26, 106 36 C108 46, 94 56, 72 54" stroke="#FFFBEB" strokeWidth="2" opacity="0.95" />
      <path d="M48 54 C34 40, 22 42, 20 48" stroke="#FEF08A" strokeWidth="1.5" opacity="0.8" />
      <path d="M72 54 C86 40, 98 42, 100 48" stroke="#FEF08A" strokeWidth="1.5" opacity="0.8" />

      {/* Berlian & Mutiara Emas di Ujung Sayap */}
      <circle cx="16" cy="30" r="3" fill="#FFFFFF" filter="drop-shadow(0 0 6px #FFFFFF)" />
      <circle cx="104" cy="30" r="3" fill="#FFFFFF" filter="drop-shadow(0 0 6px #FFFFFF)" />
      <circle cx="38" cy="122" r="2.5" fill="#FDE047" />
      <circle cx="82" cy="122" r="2.5" fill="#FDE047" />

      {/* 6. Tubuh & Antena Bertakhtakan Emas */}
      <ellipse cx="60" cy="58" rx="3.5" ry="18" fill="#581C87" stroke="#FDE047" strokeWidth="1" /> {/* Badan Ungu Gelap Royal */}
      <ellipse cx="60" cy="36" rx="4" ry="4" fill="#78350F" />
      <path d="M59 34 C54 24, 46 18, 40 16" stroke="#FDE047" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M61 34 C66 24, 74 18, 80 16" stroke="#FDE047" strokeWidth="1.8" strokeLinecap="round" />
      <polygon points="40,16 43,14 41,18" fill="#FFFBEB" />
      <polygon points="80,16 77,14 79,18" fill="#FFFBEB" />
    </svg>
  );
}

// =====================================================================
// 🖼️ 2. ORNAMEN SUDUT PINGGIRAN BINGKAI SESUAI TAHAP
// =====================================================================

// Ornamen Tahap 1: Pecahan Kristal Es
function CrystalCornerElements() {
  return (
    <>
      <div className="absolute -top-1.5 -left-1.5 pointer-events-none z-20">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <polygon points="0,0 24,4 12,24" fill="#A5F3FC" opacity="0.9" />
          <polygon points="4,24 20,16 12,36" fill="#06B6D4" opacity="0.8" />
          <circle cx="14" cy="14" r="2.5" fill="#FFFFFF" filter="drop-shadow(0 0 6px #06B6D4)" />
        </svg>
      </div>
      <div className="absolute -bottom-1.5 -right-1.5 pointer-events-none z-20 transform rotate-180">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <polygon points="0,0 24,4 12,24" fill="#A5F3FC" opacity="0.9" />
          <polygon points="4,24 20,16 12,36" fill="#06B6D4" opacity="0.8" />
          <circle cx="14" cy="14" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>
    </>
  );
}

// Ornamen Tahap 2: Sulur Daun & Dahan Muda
function NatureVineCornerElements() {
  return (
    <>
      <div className="absolute -top-2 -left-2 pointer-events-none z-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M2 30 C10 12, 28 6, 48 2" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 18 C16 10, 26 12, 24 20 C20 22, 14 22, 12 18 Z" fill="#34D399" />
          <circle cx="48" cy="2" r="3" fill="#A7F3D0" filter="drop-shadow(0 0 6px #10B981)" />
        </svg>
      </div>
      <div className="absolute -bottom-2 -right-2 pointer-events-none z-20 transform rotate-180">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M2 30 C10 12, 28 6, 48 2" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 18 C16 10, 26 12, 24 20 C20 22, 14 22, 12 18 Z" fill="#34D399" />
        </svg>
      </div>
    </>
  );
}

// Ornamen Tahap 3: Lengkungan Sayap Neon Cyan
function NeonWingCornerElements() {
  return (
    <>
      <div className="absolute -top-1 -left-1 pointer-events-none z-20">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M2 28 C4 14, 14 4, 28 2" stroke="#00F2FE" strokeWidth="2.5" strokeLinecap="round" filter="drop-shadow(0 0 6px #38BDF8)" />
          <circle cx="6" cy="6" r="3" fill="#FFFFFF" filter="drop-shadow(0 0 6px #00F2FE)" />
        </svg>
      </div>
      <div className="absolute -top-1 -right-1 pointer-events-none z-20 transform scale-x-[-1]">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M2 28 C4 14, 14 4, 28 2" stroke="#00F2FE" strokeWidth="2.5" strokeLinecap="round" filter="drop-shadow(0 0 6px #38BDF8)" />
          <circle cx="6" cy="6" r="3" fill="#FFFFFF" />
        </svg>
      </div>
      <div className="absolute -bottom-1 -left-1 pointer-events-none z-20 transform scale-y-[-1]">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M2 28 C4 14, 14 4, 28 2" stroke="#00F2FE" strokeWidth="2.5" strokeLinecap="round" filter="drop-shadow(0 0 6px #38BDF8)" />
          <circle cx="6" cy="6" r="3" fill="#FFFFFF" />
        </svg>
      </div>
      <div className="absolute -bottom-1 -right-1 pointer-events-none z-20 transform rotate-180">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M2 28 C4 14, 14 4, 28 2" stroke="#00F2FE" strokeWidth="2.5" strokeLinecap="round" filter="drop-shadow(0 0 6px #38BDF8)" />
          <circle cx="6" cy="6" r="3" fill="#FFFFFF" />
        </svg>
      </div>
    </>
  );
}

// Ornamen Tahap 4: Ukiran Mahkota Emas Kerajaan
function ImperialGoldCornerElements() {
  return (
    <>
      <div className="absolute -top-2.5 -left-2.5 pointer-events-none z-20">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M4 36 C6 18, 18 6, 36 4" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" filter="drop-shadow(0 0 8px #F59E0B)" />
          <polygon points="10,4 12,8 16,10 12,12 10,16 8,12 4,10 8,8" fill="#FEF08A" filter="drop-shadow(0 0 8px #FBBF24)" />
        </svg>
      </div>
      <div className="absolute -top-2.5 -right-2.5 pointer-events-none z-20 transform scale-x-[-1]">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M4 36 C6 18, 18 6, 36 4" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" filter="drop-shadow(0 0 8px #F59E0B)" />
          <polygon points="10,4 12,8 16,10 12,12 10,16 8,12 4,10 8,8" fill="#FEF08A" />
        </svg>
      </div>
      <div className="absolute -bottom-2.5 -left-2.5 pointer-events-none z-20 transform scale-y-[-1]">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M4 36 C6 18, 18 6, 36 4" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" filter="drop-shadow(0 0 8px #F59E0B)" />
          <polygon points="10,4 12,8 16,10 12,12 10,16 8,12 4,10 8,8" fill="#FEF08A" />
        </svg>
      </div>
      <div className="absolute -bottom-2.5 -right-2.5 pointer-events-none z-20 transform rotate-180">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M4 36 C6 18, 18 6, 36 4" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" filter="drop-shadow(0 0 8px #F59E0B)" />
          <polygon points="10,4 12,8 16,10 12,12 10,16 8,12 4,10 8,8" fill="#FEF08A" />
        </svg>
      </div>
    </>
  );
}

// =====================================================================
// 🌌 KUPU-KUPU LATAR BELAKANG
// =====================================================================
function BackgroundButterflies({ isDark }) {
  const butterflies = [
    { id: 1, top: '8%', left: '5%', size: 'w-16 h-16', rotate: '-rotate-12', delay: '0s', duration: '6.5s', flapSpeed: '2.1s' },
    { id: 2, top: '22%', right: '8%', size: 'w-24 h-24', rotate: 'rotate-45', delay: '1.2s', duration: '8s', flapSpeed: '2.8s' },
    { id: 3, top: '48%', left: '12%', size: 'w-12 h-12', rotate: 'rotate-12', delay: '2.5s', duration: '5.8s', flapSpeed: '1.8s' },
    { id: 4, top: '65%', right: '14%', size: 'w-20 h-20', rotate: '-rotate-25', delay: '0.8s', duration: '7.2s', flapSpeed: '2.4s' },
    { id: 5, top: '82%', left: '28%', size: 'w-14 h-14', rotate: 'rotate-35', delay: '3.1s', duration: '6.8s', flapSpeed: '2.0s' },
    { id: 6, top: '15%', left: '45%', size: 'w-10 h-10', rotate: '-rotate-45', delay: '1.9s', duration: '9s', flapSpeed: '3.0s' },
    { id: 7, top: '78%', right: '35%', size: 'w-16 h-16', rotate: 'rotate-15', delay: '2.0s', duration: '6.2s', flapSpeed: '2.2s' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {butterflies.map((b) => (
        <div
          key={b.id}
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            animationDuration: b.duration,
            animationDelay: b.delay
          }}
          className={`absolute animate-float-drift transition-all duration-700 ${b.rotate} ${
            isDark 
              ? 'opacity-85 neon-glow-dark' 
              : 'opacity-30 hover:opacity-50'
          }`}
        >
          <div style={{ animationDuration: b.flapSpeed }} className="animate-wing-flap">
            <RadiantMorphoMascot className={b.size} isDark={isDark} />
          </div>
        </div>
      ))}
    </div>
  );
}

// =====================================================================
// 🚀 EFEK "BUTTERFLY BURST" SAAT MENU DIPENCET
// =====================================================================
function ButterflyBurstEffect({ bursts, isDark }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {bursts.map(b => (
        <div
          key={b.id}
          style={{ left: b.x, top: b.y }}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-burst-fly"
        >
          <div className="animate-burst-wings relative">
            <RadiantMorphoMascot className="w-10 h-10" isDark={isDark} />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <span className="text-[10px] animate-ping text-sky-400">✨</span>
              <span className="text-[8px] animate-pulse text-cyan-300">★</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// =====================================================================
// 🎵 SINTESIS AUDIO ALAM ZEN (WEB AUDIO API MURNI - TANPA DEPENDENSI)
// Menghasilkan suara hujan, ombak laut, angin hutan, & api unggun organik
// =====================================================================
class ZenSoundSynthesizer {
  constructor() {
    this.ctx = null;
    this.nodes = [];
    this.gainNode = null;
    this.volume = 0.5;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.gainNode = this.ctx.createGain();
        this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.gainNode.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  stop() {
    this.nodes.forEach(n => {
      try {
        if (n.stop) n.stop();
        if (n.disconnect) n.disconnect();
      } catch (_e) {
        // Abaikan jika node sudah terhenti
      }
    });
    this.nodes = [];
  }

  setVolume(val) {
    this.volume = val;
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setTargetAtTime(val, this.ctx.currentTime, 0.05);
    }
  }

  play(type) {
    this.init();
    this.stop();
    if (!this.ctx || type === 'none') return;

    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    if (type === 'rain') {
      // 🌧️ Pink Noise terfilter untuk derai hujan lembut
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
        b6 = white * 0.115926;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1100, this.ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(this.gainNode);
      whiteNoise.start();
      this.nodes.push(whiteNoise);
    } else if (type === 'waves') {
      // 🌊 Brown Noise termodulasi LFO lambat untuk ritme deburan ombak laut
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 0.8;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      noise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, this.ctx.currentTime);

      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime); // Siklus ~8 detik per ombak

      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(260, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      const waveGain = this.ctx.createGain();
      const waveLfo = this.ctx.createOscillator();
      waveLfo.frequency.setValueAtTime(0.12, this.ctx.currentTime);
      const waveLfoGain = this.ctx.createGain();
      waveLfoGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      waveLfo.connect(waveLfoGain);
      waveLfoGain.connect(waveGain.gain);

      noise.connect(filter);
      filter.connect(waveGain);
      waveGain.connect(this.gainNode);

      noise.start();
      lfo.start();
      waveLfo.start();
      this.nodes.push(noise, lfo, waveLfo);
    } else if (type === 'forest') {
      // 🌲 Bandpass noise tersaring lembut untuk desir angin di pepohonan hutan
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.04 * white)) / 1.04;
        lastOut = output[i];
        output[i] *= 0.55;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      noise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(500, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.6, this.ctx.currentTime);

      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.18, this.ctx.currentTime);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(220, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      noise.connect(filter);
      filter.connect(this.gainNode);
      noise.start();
      lfo.start();
      this.nodes.push(noise, lfo);
    } else if (type === 'fire') {
      // 🔥 Gemerisik letupan api unggun hangat
      for (let i = 0; i < bufferSize; i++) {
        const crackle = Math.random() < 0.0035 ? (Math.random() * 2 - 1) * 0.95 : (Math.random() * 2 - 1) * 0.04;
        output[i] = crackle;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      noise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2200, this.ctx.currentTime);

      noise.connect(filter);
      filter.connect(this.gainNode);
      noise.start();
      this.nodes.push(noise);
    }
  }
}

// =====================================================================
// 🧘‍♂️ RUANG FOKUS BELAJAR (ZEN STUDY ROOM - POMODORO)
// =====================================================================
function ZenFocusModal({ isOpen, onClose }) {
  const [timerSeconds, setTimerSeconds] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [selectedSound, setSelectedSound] = useState('none');
  const [volume, setVolume] = useState(0.5);
  const synthRef = useRef(null);

  // Inisialisasi synthesizer suara
  useEffect(() => {
    synthRef.current = new ZenSoundSynthesizer();
    return () => {
      synthRef.current?.stop();
    };
  }, []);

  // Hentikan suara jika modal ditutup
  useEffect(() => {
    if (!isOpen && synthRef.current) {
      synthRef.current.stop();
      setSelectedSound('none');
    }
  }, [isOpen]);

  // Sinkronisasi perubahan volume
  useEffect(() => {
    if (synthRef.current) {
      synthRef.current.setVolume(volume);
    }
  }, [volume]);

  // Timer Pomodoro
  useEffect(() => {
    let interval = null;
    if (isActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(sec => sec - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timerSeconds]);

  if (!isOpen) return null;

  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  const formatTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const resetTimer = (mins) => {
    setIsActive(false);
    setTimerSeconds(mins * 60);
  };

  const handleSelectSound = (soundId) => {
    if (selectedSound === soundId) {
      synthRef.current?.stop();
      setSelectedSound('none');
    } else {
      setSelectedSound(soundId);
      synthRef.current?.play(soundId);
    }
  };

  const handleClose = () => {
    synthRef.current?.stop();
    setSelectedSound('none');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-sky-950/60 backdrop-blur-xl transition-all duration-500 animate-in fade-in">
      <div className="absolute top-1/4 left-1/4 opacity-35 animate-pulse pointer-events-none">
        <RadiantMorphoMascot className="w-32 h-32" isDark={false} />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-25 animate-pulse pointer-events-none">
        <GoldenEmperorMascot className="w-28 h-28" isDark={false} />
      </div>

      {/* Kotak Modal Bertema Biru Muda (Sky Blue Glassmorphism) */}
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto p-5 sm:p-7 rounded-[32px] sm:rounded-[36px] bg-gradient-to-b from-[#F0F9FF] via-[#E0F2FE] to-[#D4EDFC] border-2 border-sky-300 text-slate-800 shadow-[0_20px_70px_rgba(14,165,233,0.35)] flex flex-col items-center text-center space-y-5">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-sky-700 hover:text-sky-900 border border-sky-200 shadow-xs transition"
          title="Tutup Ruang Zen"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Judul */}
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/60 text-sky-700 text-xs font-extrabold">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Ruang Belajar Zen • Pomodoro</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-transparent bg-gradient-to-r from-sky-700 via-cyan-600 to-sky-900 bg-clip-text">
            Fokus & Masuki Ritme Belajarmu 🦋
          </h2>
          <p className="text-xs text-sky-800/80 font-medium max-w-sm">
            Tutup semua distraksi. Satu siklus fokus membawa pemahaman yang mendalam.
          </p>
        </div>

        {/* Lingkaran Jam Pomodoro Bertema Biru Muda Cerah */}
        <div className="relative flex items-center justify-center">
          <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full border-4 border-sky-400 flex flex-col items-center justify-center bg-gradient-to-b from-white via-sky-50 to-cyan-100 shadow-[0_0_35px_rgba(56,189,248,0.3)]">
            <span className="text-4xl sm:text-5xl font-mono font-black tracking-wider text-sky-950">
              {formatTime}
            </span>
            <span className="text-[10px] sm:text-[11px] text-sky-600 font-extrabold uppercase tracking-widest mt-1">
              {isActive ? 'Sedang Fokus...' : 'Waktu Terjeda'}
            </span>
          </div>
        </div>

        {/* Tombol Kontrol Mulai & Reset */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsActive(!isActive)}
            className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/30 flex items-center space-x-2 transition transform active:scale-95"
          >
            {isActive ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
            <span>{isActive ? 'Jeda Istirahat' : 'Mulai Belajar'}</span>
          </button>
          <button
            onClick={() => resetTimer(25)}
            className="p-2.5 rounded-2xl bg-white/80 hover:bg-white text-sky-700 border border-sky-200 shadow-xs transition"
            title="Reset ke 25 Menit"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Pilihan Durasi Preset */}
        <div className="flex space-x-2 text-xs font-bold">
          <button onClick={() => resetTimer(25)} className="px-3.5 py-1.5 rounded-xl bg-white/90 border border-sky-200 hover:border-sky-400 text-sky-800 shadow-xs hover:bg-sky-50 transition">
            25 Menit
          </button>
          <button onClick={() => resetTimer(5)} className="px-3.5 py-1.5 rounded-xl bg-white/90 border border-sky-200 hover:border-sky-400 text-sky-800 shadow-xs hover:bg-sky-50 transition">
            5 Menit
          </button>
          <button onClick={() => resetTimer(15)} className="px-3.5 py-1.5 rounded-xl bg-white/90 border border-sky-200 hover:border-sky-400 text-sky-800 shadow-xs hover:bg-sky-50 transition">
            15 Menit
          </button>
        </div>

        {/* ============================================================ */}
        {/* 🌿 PILIHAN SOUND MENENANGKAN & SUARA ALAM                   */}
        {/* ============================================================ */}
        <div className="w-full pt-4 border-t border-sky-300/60 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-extrabold text-sky-800">
              <Volume2 className="w-4 h-4 text-sky-600" />
              <span>Suasana Suara Alam:</span>
            </div>
            
            {/* Slider Pengatur Volume */}
            {selectedSound !== 'none' && (
              <div className="flex items-center space-x-2 bg-white/90 border border-sky-200 px-2.5 py-1 rounded-xl shadow-xs">
                <VolumeX 
                  onClick={() => handleSelectSound('none')}
                  className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-sky-700"
                  title="Matikan Suara" 
                />
                <input 
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-16 sm:w-20 h-1 bg-sky-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <span className="text-[10px] text-sky-700 font-bold">{Math.round(volume * 100)}%</span>
              </div>
            )}
          </div>

          {/* Grid Tombol Pilihan Suara Alam */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'rain', label: 'Hujan Lembut', icon: '🌧️', desc: 'Fokus & Teduh' },
              { id: 'waves', label: 'Ombak Laut', icon: '🌊', desc: 'Irama Rileks' },
              { id: 'forest', label: 'Angin Hutan', icon: '🌲', desc: 'Segar & Tenang' },
              { id: 'fire', label: 'Api Unggun', icon: '🔥', desc: 'Hangat & Akrab' }
            ].map((s) => {
              const isPlaying = selectedSound === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelectSound(s.id)}
                  className={`p-2.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isPlaying
                      ? 'bg-gradient-to-br from-sky-500 to-cyan-500 text-white border-sky-400 shadow-md shadow-sky-500/30 ring-2 ring-sky-400'
                      : 'bg-white/80 border-sky-200 hover:bg-white hover:border-sky-400 text-slate-800 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{s.icon}</span>
                    {isPlaying && (
                      <span className="flex space-x-0.5 items-end h-3">
                        <span className="w-1 bg-white h-2 animate-pulse rounded-full"></span>
                        <span className="w-1 bg-sky-100 h-3 animate-pulse delay-75 rounded-full"></span>
                        <span className="w-1 bg-white h-1.5 animate-pulse delay-150 rounded-full"></span>
                      </span>
                    )}
                  </div>
                  <div className="mt-2">
                    <div className={`text-xs font-bold leading-tight ${isPlaying ? 'text-white' : 'text-slate-800'}`}>
                      {s.label}
                    </div>
                    <div className={`text-[10px] mt-0.5 ${isPlaying ? 'text-sky-100' : 'text-sky-600 font-medium'}`}>{s.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// 📅 DATA JADWAL PERKULIAHAN INFORMATIKA (SENIN - JUMAT)
// =====================================================================
const weeklyScheduleData = {
  Senin: [
    { time: '09:00 - 10:30 WIB', course: 'Kalkulus Lanjut (Integral Lipat Tiga)', room: 'Gedung Teori B.2', lecturer: 'Dr. Hendra, M.Kom' },
    { time: '13:00 - 15:00 WIB', course: 'Praktikum Basis Data & Query SQL', room: 'Lab Komputer 03', lecturer: 'Ir. Anita, M.T.' }
  ],
  Selasa: [
    { time: '08:00 - 10:00 WIB', course: 'Struktur Data & Kompleksitas Algoritma', room: 'Gedung Teori A.1', lecturer: 'Prof. Bambang' },
    { time: '10:30 - 12:00 WIB', course: 'Arsitektur Komputer & Jaringan', room: 'Lab Jaringan 02', lecturer: 'Bpk. Rizky, M.T.' }
  ],
  Rabu: [
    { time: '09:00 - 11:30 WIB', course: 'Rekayasa Perangkat Lunak (SDLC Agile)', room: 'Gedung Teori B.1', lecturer: 'Dr. Maya, M.Cs' },
    { time: '13:30 - 15:30 WIB', course: 'Pemrograman Web Lanjut (React & State)', room: 'Lab Komputer 01', lecturer: 'Bpk. Fajar, S.Kom' }
  ],
  Kamis: [
    { time: '08:30 - 10:30 WIB', course: 'Kecerdasan Buatan & Machine Learning', room: 'Lab AI & Data 04', lecturer: 'Dr. Ilham, Ph.D' },
    { time: '13:00 - 14:30 WIB', course: 'Interaksi Manusia & Komputer (UI/UX)', room: 'Studio Desain 02', lecturer: 'Ibu Ratna, M.Ds' }
  ],
  Jumat: [
    { time: '08:00 - 09:30 WIB', course: 'Etika Profesi & Hukum Siber', room: 'Auditorium Utama', lecturer: 'Dr. Wawan, S.H., M.H.' },
    { time: '13:30 - 15:00 WIB', course: 'Asistensi Proyek & Diskusi Kolaborasi', room: 'Ruang Kolaborasi B.3', lecturer: 'Tim Asisten Lab' }
  ]
};

// =====================================================================
// 📝 DATA DEFAULT MISI TUGAS KULIAH (TERINTEGRASI LOCALSTORAGE)
// =====================================================================
const defaultTasksList = [
  {
    id: 1,
    title: 'Tugas Kalkulus: Matriks & Vektor',
    subject: 'Kalkulus Lanjut',
    deadline: 'Hari ini • 23:59 WIB',
    priority: 'Prioritas Tinggi',
    reward: '+100 XP',
    xpValue: 100,
    status: 'Dalam Pengerjaan',
    badge: 'border-rose-500/40 text-rose-400 bg-rose-500/10'
  },
  {
    id: 2,
    title: 'Laporan Proyek Akhir: Algoritma Genetika',
    subject: 'Kecerdasan Buatan',
    deadline: 'Hari ini • 23:59 WIB',
    priority: 'Prioritas Tinggi',
    reward: '+120 XP',
    xpValue: 120,
    status: 'Dalam Pengerjaan',
    badge: 'border-rose-500/40 text-rose-400 bg-rose-500/10'
  },
  {
    id: 3,
    title: 'Implementasi API Backend & Database Relasional',
    subject: 'Pemrograman Web',
    deadline: 'Besok • 17:00 WIB',
    priority: 'Prioritas Sedang',
    reward: '+80 XP',
    xpValue: 80,
    status: 'Belum Dimulai',
    badge: 'border-amber-500/40 text-amber-400 bg-amber-500/10'
  },
  {
    id: 4,
    title: 'Analisis Kompleksitas Waktu Struktur Data',
    subject: 'Struktur Data',
    deadline: '24 Okt 2026 • 23:59 WIB',
    priority: 'Prioritas Normal',
    reward: '+60 XP',
    xpValue: 60,
    status: 'Belum Dimulai',
    badge: 'border-sky-500/40 text-sky-400 bg-sky-500/10'
  },
  {
    id: 5,
    title: 'Studi Kasus Desain Responsif Mobile Apps',
    subject: 'UI/UX Desain',
    deadline: 'Selesai Kemarin',
    priority: 'Selesai',
    reward: '+100 XP',
    xpValue: 100,
    status: 'Telah Dikumpulkan',
    badge: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
  }
];

// =====================================================================
// 🎮 DATA PERTANYAAN KUIS INTERAKTIF PEMROGRAMAN WEB
// =====================================================================
const quizQuestionsData = [
  {
    question: "Apa fungsi utama dari React Hook 'useEffect'?",
    options: [
      { id: 'A', text: "Menangani efek samping seperti fetch data, timer, & listener", isCorrect: true },
      { id: 'B', text: "Mengubah file HTML menjadi kode biner server" },
      { id: 'C', text: "Membuat database relasional otomatis di browser" },
      { id: 'D', text: "Menggantikan peran CSS untuk animasi tata letak" }
    ],
    explanation: "useEffect digunakan untuk sinkronisasi komponen dengan sistem eksternal, seperti API, event listener, dan timer."
  },
  {
    question: "Struktur data manakah yang menganut prinsip LIFO (Last In First Out)?",
    options: [
      { id: 'A', text: "Queue (Antrean)" },
      { id: 'B', text: "Stack (Tumpukan)", isCorrect: true },
      { id: 'C', text: "Linked List (Senarai Berantai)" },
      { id: 'D', text: "Binary Search Tree" }
    ],
    explanation: "Stack menyisipkan dan mengeluarkan data dari sisi yang sama (terakhir masuk, pertama keluar)."
  },
  {
    question: "Dalam CSS modern, apa kegunaan properti 'backdrop-filter: blur()'?",
    options: [
      { id: 'A', text: "Menghapus cache gambar halaman web" },
      { id: 'B', text: "Memburamkan layer di belakang elemen (Efek Glassmorphism)", isCorrect: true },
      { id: 'C', text: "Mengompresi ukuran file CSS agar lebih ringan" },
      { id: 'D', text: "Membuat teks menjadi tebal dan berbayang" }
    ],
    explanation: "backdrop-filter: blur() memburamkan konten yang berada tepat di belakang wadah elemen kaca glassmorphism."
  },
  {
    question: "Berapa kompleksitas waktu pencarian rata-rata pada Binary Search Tree yang seimbang?",
    options: [
      { id: 'A', text: "O(n²)" },
      { id: 'B', text: "O(1)" },
      { id: 'C', text: "O(log n)", isCorrect: true },
      { id: 'D', text: "O(n!)" }
    ],
    explanation: "Pada balanced BST, ruang pencarian selalu terbagi dua pada setiap langkah, menghasilkan waktu O(log n)."
  }
];

// =====================================================================
// 🏆 DATA LENCANA PRESTASI (MORPHO BADGES)
// =====================================================================
const morphoBadgesData = [
  {
    id: 'streak',
    title: 'Streak Warrior 🔥',
    desc: 'Pertahankan api belajar aktif selama 5 hari berturut-turut.',
    isUnlocked: true,
    icon: '🔥',
    reward: '+100 XP'
  },
  {
    id: 'morpho',
    title: 'Morpho Explorer 🦋',
    desc: 'Jelajahi dan coba seluruh wujud 4 tahap metamorfosis.',
    isUnlocked: true,
    icon: '🦋',
    reward: '+80 XP'
  },
  {
    id: 'zen',
    title: 'Zen Master ⏱️',
    desc: 'Selesaikan sesi fokus mendalam di Ruang Belajar Zen.',
    isUnlocked: true,
    icon: '⏱️',
    reward: '+50 XP'
  },
  {
    id: 'quiz',
    title: 'Quiz Champion 🎯',
    desc: 'Kerjakan evaluasi kuis dan raih nilai sempurna 100%.',
    isUnlocked: false,
    icon: '🎯',
    reward: '+150 XP'
  },
  {
    id: 'task',
    title: 'Task Conqueror 📝',
    desc: 'Tuntaskan seluruh misi tugas aktif pekan ini.',
    isUnlocked: false,
    icon: '📝',
    reward: '+120 XP'
  },
  {
    id: 'emperor',
    title: 'Golden Emperor 👑',
    desc: 'Capai level 16+ dan sandang mahkota kaisar emas tertinggi.',
    isUnlocked: false,
    icon: '👑',
    reward: '+300 XP'
  }
];

// =====================================================================
// 🎮 MODAL KUIS INTERAKTIF (PLAYABLE QUIZ ARENA)
// =====================================================================
function InteractiveQuizModal({ isOpen, onClose, onQuizComplete, isDark }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentIdx(0);
      setSelectedOption(null);
      setIsAnswered(false);
      setCorrectCount(0);
      setIsFinished(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentQ = quizQuestionsData[currentIdx];

  const handleSelect = (opt) => {
    if (isAnswered) return;
    setSelectedOption(opt.id);
    setIsAnswered(true);
    if (opt.isCorrect) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quizQuestionsData.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleClaim = () => {
    onQuizComplete(150);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
      <div className={`relative w-full max-w-xl p-6 sm:p-8 rounded-[32px] border shadow-2xl transition-all ${
        isDark 
          ? 'bg-[#0E1A38]/95 border-sky-800 text-slate-100' 
          : 'bg-white/95 border-sky-200 text-slate-800'
      }`}>
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-400 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!isFinished ? (
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b pb-3 border-sky-500/20">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/15 border border-sky-400/50 text-sky-400">
                  Pertanyaan {currentIdx + 1} dari {quizQuestionsData.length}
                </span>
                <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  +150 XP Reward
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400">
                Skor: {correctCount * 25}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-black leading-snug">
              {currentQ.question}
            </h3>

            {/* Pilihan Jawaban A, B, C, D */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt) => {
                const isChosen = selectedOption === opt.id;
                let optStyle = isDark
                  ? 'bg-[#152349] border-sky-900/60 hover:border-sky-500'
                  : 'bg-sky-50/60 border-sky-100 hover:border-sky-300';

                if (isAnswered) {
                  if (opt.isCorrect) {
                    optStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold';
                  } else if (isChosen && !opt.isCorrect) {
                    optStyle = 'bg-rose-500/20 border-rose-500 text-rose-400 font-bold';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt)}
                    className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-3 ${optStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-sky-500/20 flex items-center justify-center font-bold text-xs shrink-0 text-sky-400">
                      {opt.id}
                    </span>
                    <span className="flex-1">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Penjelasan Singkat Jawaban */}
            {isAnswered && (
              <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-xs leading-relaxed animate-in fade-in">
                <span className="font-bold text-sky-400">💡 Penjelasan: </span>
                <span>{currentQ.explanation}</span>
              </div>
            )}

            {/* Tombol Lanjut Soal */}
            <div className="pt-2 flex justify-end">
              <button
                disabled={!isAnswered}
                onClick={handleNext}
                className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-bold text-xs shadow-md shadow-sky-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition transform active:scale-95 flex items-center space-x-2"
              >
                <span>{currentIdx + 1 < quizQuestionsData.length ? 'Soal Berikutnya' : 'Selesaikan Kuis'}</span>
                <span>➔</span>
              </button>
            </div>
          </div>
        ) : (
          /* Hasil Akhir Kuis */
          <div className="text-center py-4 space-y-4 animate-in zoom-in-95">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-sky-400 to-cyan-400 flex items-center justify-center text-4xl shadow-lg shadow-sky-500/30 animate-bounce">
              🏆
            </div>
            <div>
              <h3 className="text-xl font-black">Evaluasi Selesai!</h3>
              <p className="text-xs text-sky-400 mt-1">Kamu berhasil menjawab {correctCount} dari {quizQuestionsData.length} pertanyaan dengan benar!</p>
            </div>

            <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/30 inline-block px-8">
              <span className="text-3xl font-black text-sky-400">
                {(correctCount / quizQuestionsData.length) * 100} / 100
              </span>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Predikat Evaluasi A</p>
            </div>

            <div className="pt-3">
              <button
                onClick={handleClaim}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-600 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-black text-sm shadow-xl shadow-sky-500/30 transition transform active:scale-95 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Klaim Hadiah +150 XP & Badge!</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// =====================================================================
// 📝 MODAL TAMBAH MISI TUGAS BARU (ADD TASK MODAL)
// =====================================================================
function AddTaskModal({ isOpen, onClose, onAddTask, isDark }) {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Prioritas Sedang');
  const [xpValue, setXpValue] = useState(80);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !subject.trim()) return;

    let badgeClass = 'border-amber-500/40 text-amber-400 bg-amber-500/10';
    if (priority === 'Prioritas Tinggi') badgeClass = 'border-rose-500/40 text-rose-400 bg-rose-500/10';
    if (priority === 'Prioritas Normal') badgeClass = 'border-sky-500/40 text-sky-400 bg-sky-500/10';

    const newTask = {
      id: Date.now(),
      title,
      subject,
      deadline: deadline || 'Hari ini • 23:59 WIB',
      priority,
      reward: `+${xpValue} XP`,
      xpValue: parseInt(xpValue, 10),
      status: 'Belum Dimulai',
      badge: badgeClass
    };

    onAddTask(newTask);
    setTitle('');
    setSubject('');
    setDeadline('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
      <div className={`relative w-full max-w-lg p-6 sm:p-7 rounded-[32px] border shadow-2xl transition-all ${
        isDark 
          ? 'bg-[#0E1A38]/95 border-sky-800 text-slate-100' 
          : 'bg-white/95 border-sky-200 text-slate-800'
      }`}>
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-400 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2.5 mb-5 border-b pb-3 border-sky-500/20">
          <div className="p-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md">
            <Plus className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-black">Tambah Misi Tugas Baru</h3>
            <p className="text-xs text-sky-400">Catat tugas kuliah dan kumpulkan XP saat tuntas</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Judul Tugas / Proyek *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Makalah Kecerdasan Buatan..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full p-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                isDark ? 'bg-[#152349] border-sky-900 text-white' : 'bg-slate-50 border-sky-100 text-slate-800'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">Mata Kuliah *</label>
              <input
                type="text"
                required
                placeholder="Contoh: Pemrograman Web"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`w-full p-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  isDark ? 'bg-[#152349] border-sky-900 text-white' : 'bg-slate-50 border-sky-100 text-slate-800'
                }`}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">Batas Waktu (Deadline)</label>
              <input
                type="text"
                placeholder="Contoh: Besok • 23:59 WIB"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className={`w-full p-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  isDark ? 'bg-[#152349] border-sky-900 text-white' : 'bg-slate-50 border-sky-100 text-slate-800'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">Tingkat Prioritas</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className={`w-full p-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  isDark ? 'bg-[#152349] border-sky-900 text-white' : 'bg-slate-50 border-sky-100 text-slate-800'
                }`}
              >
                <option value="Prioritas Tinggi">Prioritas Tinggi (Mendesak)</option>
                <option value="Prioritas Sedang">Prioritas Sedang</option>
                <option value="Prioritas Normal">Prioritas Normal</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">Hadiah XP (Reward)</label>
              <select
                value={xpValue}
                onChange={(e) => setXpValue(e.target.value)}
                className={`w-full p-3 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  isDark ? 'bg-[#152349] border-sky-900 text-white' : 'bg-slate-50 border-sky-100 text-slate-800'
                }`}
              >
                <option value={60}>+60 XP (Tugas Ringan)</option>
                <option value={80}>+80 XP (Tugas Standar)</option>
                <option value={100}>+100 XP (Tugas Besar)</option>
                <option value={150}>+150 XP (Proyek Utama)</option>
              </select>
            </div>
          </div>

          <div className="pt-3 flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-sky-900 text-xs font-bold text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs font-bold shadow-md shadow-sky-500/25 hover:from-sky-400 hover:to-cyan-400 transition"
            >
              Simpan Misi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// =====================================================================
// 🏆 MODAL GALERI LENCANA PRESTASI (MORPHO BADGES GALLERY)
// =====================================================================
function BadgesGalleryModal({ isOpen, onClose, isDark, completedCount }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
      <div className={`relative w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-[32px] border shadow-2xl transition-all ${
        isDark 
          ? 'bg-[#0E1A38]/95 border-sky-800 text-slate-100' 
          : 'bg-white/95 border-sky-200 text-slate-800'
      }`}>
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-400 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-5 border-b pb-3 border-sky-500/20">
          <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 shadow-md">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-black">Galeri Lencana Prestasi (Morpho Badges)</h3>
            <p className="text-xs text-sky-400">Pencapaian belajar Faris sepanjang semester</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {morphoBadgesData.map((b) => {
            const isUnlocked = b.isUnlocked || (b.id === 'task' && completedCount >= 1);
            return (
              <div
                key={b.id}
                className={`p-4 rounded-2xl border transition flex items-start space-x-3 ${
                  isUnlocked
                    ? isDark
                      ? 'bg-gradient-to-br from-sky-950/60 to-cyan-950/30 border-cyan-400/50 shadow-xs'
                      : 'bg-gradient-to-br from-sky-50 to-cyan-50/70 border-sky-200 shadow-xs'
                    : isDark
                      ? 'bg-[#101C3E]/50 border-sky-950 opacity-50'
                      : 'bg-slate-100/60 border-slate-200 opacity-50'
                }`}
              >
                <span className="text-3xl shrink-0 p-1">{b.icon}</span>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h4 className="text-xs font-black">{b.title}</h4>
                    {isUnlocked ? (
                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        TERBUKA ✓
                      </span>
                    ) : (
                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-slate-500/20 text-slate-400">
                        TERKUNCI 🔒
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{b.desc}</p>
                  <span className="text-[10px] font-bold text-amber-500 mt-1.5 block">{b.reward}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// 🌟 MODAL PERAYAAN NAIK LEVEL METAMORFOSIS (LEVEL UP POPUP)
// =====================================================================
function LevelUpCelebrationModal({ isOpen, onClose, newLevel, isDark }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-in zoom-in-95">
      <div className="relative w-full max-w-md p-7 sm:p-8 rounded-[36px] bg-gradient-to-b from-[#0F2D6B] to-[#061838] border-2 border-sky-400 text-white shadow-[0_0_80px_rgba(56,189,248,0.5)] flex flex-col items-center text-center space-y-5">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-2xl animate-pulse"></div>
          <RadiantMorphoMascot className="w-36 h-36 relative z-10 animate-morphy" isDark={true} />
        </div>

        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 text-xs font-black">
            <Sparkles className="w-3.5 h-3.5" />
            <span>METAMORFOSIS NAIK TINGKAT!</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-gradient-to-r from-cyan-200 via-sky-300 to-white bg-clip-text">
            Selamat Faris! 🎉
          </h2>
          <p className="text-xs text-sky-200/80">
            Dedikasi belajarmu membuahkan hasil. Kamu telah resmi menembus ke level berikutnya!
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-sky-950/80 border border-sky-500/40 w-full flex items-center justify-around">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Level Baru</span>
            <div className="text-2xl font-black text-cyan-300">Level {newLevel}</div>
          </div>
          <div className="h-8 w-px bg-sky-800"></div>
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Status Wujud</span>
            <div className="text-xs font-bold text-amber-300">Radiant Morpho 🦋</div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-black text-xs shadow-lg shadow-sky-500/30 transition transform active:scale-95"
        >
          Lanjutkan Petualangan Belajar ➔
        </button>
      </div>
    </div>
  );
}

// =====================================================================
// 🗂️ SLIDE-OVER DRAWER (OPSI B): DAFTAR TUGAS BELUM DIKERJAKAN
// Meluncur dari samping kanan layar ketika ikon tugas diklik
// =====================================================================
function PendingTasksDrawer({ isOpen, onClose, isDark, tasks, onGoToTasks, onCompleteTask }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Latar Belakang Gelap dengan Efek Blur */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-8 pointer-events-none">
        <div className={`w-screen max-w-md pointer-events-auto animate-drawer-slide p-6 shadow-2xl flex flex-col justify-between border-l ${
          isDark 
            ? 'bg-[#0E1A38]/95 border-sky-900/80 text-slate-100 backdrop-blur-2xl' 
            : 'bg-white/95 border-sky-100 text-slate-800 backdrop-blur-2xl'
        }`}>
          <div>
            {/* Header Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-sky-500/20">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/30">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black">Misi Belum Dikerjakan</h3>
                  <p className="text-xs text-sky-400 font-semibold">{tasks.length} tugas menanti diselesaikan</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className={`p-2 rounded-xl border transition ${
                  isDark ? 'bg-sky-950 border-sky-800 text-sky-300 hover:bg-sky-900' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
                }`}
                title="Tutup Panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Daftar Kartu Tugas Pending */}
            <div className="mt-5 space-y-3 overflow-y-auto max-h-[calc(100vh-210px)] pr-1">
              {tasks.length === 0 ? (
                <div className="p-8 text-center text-slate-400 space-y-2">
                  <span className="text-4xl block">🎉</span>
                  <p className="font-bold text-sm">Semua Misi Telah Selesai!</p>
                  <p className="text-xs text-sky-400">Kerja bagus, Faris! Nikmati waktumu atau tambah tugas baru.</p>
                </div>
              ) : (
                tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-2xl border transition-all duration-200 space-y-2.5 ${
                      isDark
                        ? 'bg-[#152349] border-sky-900/60 hover:border-sky-500'
                        : 'bg-sky-50/50 border-sky-100 hover:border-sky-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border ${
                        isDark ? 'bg-[#0B142B] border-sky-800 text-sky-300' : 'bg-white border-sky-200 text-sky-700'
                      }`}>
                        {task.subject}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${task.badge}`}>
                        {task.reward}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold leading-snug">{task.title}</h4>

                    <div className="flex items-center justify-between pt-2 border-t border-sky-900/20 text-xs">
                      <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-rose-400" />
                        <span>{task.deadline}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        {onCompleteTask && (
                          <button
                            onClick={() => onCompleteTask(task.id)}
                            className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-2 py-0.5 rounded-lg border border-emerald-500/30 flex items-center space-x-1 transition"
                            title="Tandai selesai & dapatkan XP"
                          >
                            <Check className="w-3 h-3" />
                            <span>Selesai</span>
                          </button>
                        )}
                        <button
                          onClick={() => {
                            onClose();
                            onGoToTasks();
                          }}
                          className="text-xs font-bold text-sky-400 hover:underline flex items-center space-x-1"
                        >
                          <span>Detail</span>
                          <span>➔</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Tombol Aksi di Bawah Drawer */}
          <div className="pt-4 border-t border-sky-500/20">
            <button
              onClick={() => {
                onClose();
                onGoToTasks();
              }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-bold text-xs shadow-md shadow-sky-500/25 transition transform active:scale-95"
            >
              Lihat Halaman Tugas Lengkap ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// 🌐 APLIKASI WEB UTAMA (STUDYMORPHO)
// =====================================================================
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [bursts, setBursts] = useState([]);
  const [isZenModeOpen, setIsZenModeOpen] = useState(false);
  const [isPendingTasksDrawerOpen, setIsPendingTasksDrawerOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Senin');

  // State Evolusi Metamorfosis Aktif (1 = Kristal, 2 = Toska, 3 = Biru, 4 = Emas)
  const [evolutionStage, setEvolutionStage] = useState(3);

  // State XP & Level Dinamis dengan LocalStorage
  const [userXP, setUserXP] = useState(() => {
    try {
      const saved = localStorage.getItem('studymorpho_xp');
      return saved ? parseInt(saved, 10) : 780;
    } catch (_e) {
      return 780;
    }
  });
  const [userLevel, setUserLevel] = useState(() => {
    try {
      const saved = localStorage.getItem('studymorpho_level');
      return saved ? parseInt(saved, 10) : 12;
    } catch (_e) {
      return 12;
    }
  });

  // State Tugas Kuliah Dinamis dengan LocalStorage
  const [tasksList, setTasksList] = useState(() => {
    try {
      const saved = localStorage.getItem('studymorpho_tasks');
      return saved ? JSON.parse(saved) : defaultTasksList;
    } catch (_e) {
      return defaultTasksList;
    }
  });

  // State Modal-Modal Interaktif Baru
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState(false);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [newLevelReached, setNewLevelReached] = useState(12);

  // State Tanggal Terpilih pada Kalender Interaktif (Oktober 2026)
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(20);

  // Helper untuk menambah XP secara visual & memicu Level Up jika >= 1000
  const addXP = (amount) => {
    setUserXP((prevXP) => {
      const nextXP = prevXP + amount;
      if (nextXP >= 1000) {
        const excess = nextXP - 1000;
        setUserLevel((prevLv) => {
          const nextLv = prevLv + 1;
          try {
            localStorage.setItem('studymorpho_level', String(nextLv));
          } catch (_e) {}
          setNewLevelReached(nextLv);
          setIsLevelUpModalOpen(true);
          return nextLv;
        });
        try {
          localStorage.setItem('studymorpho_xp', String(excess));
        } catch (_e) {}
        return excess;
      }
      try {
        localStorage.setItem('studymorpho_xp', String(nextXP));
      } catch (_e) {}
      return nextXP;
    });
  };

  // Helper menyelesaikan tugas
  const handleCompleteTask = (taskId) => {
    setTasksList((prev) => {
      const updated = prev.map((t) => {
        if (t.id === taskId && t.status !== 'Telah Dikumpulkan') {
          addXP(t.xpValue || 80);
          return {
            ...t,
            status: 'Telah Dikumpulkan',
            priority: 'Selesai',
            badge: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
          };
        }
        return t;
      });
      try {
        localStorage.setItem('studymorpho_tasks', JSON.stringify(updated));
      } catch (_e) {}
      return updated;
    });
  };

  // Helper menambah tugas baru
  const handleAddNewTask = (newTask) => {
    setTasksList((prev) => {
      const updated = [newTask, ...prev];
      try {
        localStorage.setItem('studymorpho_tasks', JSON.stringify(updated));
      } catch (_e) {}
      return updated;
    });
  };

  // Helper menghapus tugas
  const handleDeleteTask = (taskId) => {
    setTasksList((prev) => {
      const updated = prev.filter((t) => t.id !== taskId);
      try {
        localStorage.setItem('studymorpho_tasks', JSON.stringify(updated));
      } catch (_e) {}
      return updated;
    });
  };

  // Daftar tugas yang belum selesai dan sudah tuntas
  const pendingTasks = tasksList.filter(t => t.status !== 'Telah Dikumpulkan');
  const completedTasksCount = tasksList.filter(t => t.status === 'Telah Dikumpulkan').length;

  const triggerButterflyBurst = (e, targetTab) => {
    setActiveTab(targetTab);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const newBurst = {
      id: Date.now() + Math.random(),
      x,
      y
    };

    setBursts(prev => [...prev, newBurst]);
    setTimeout(() => {
      setBursts(prev => prev.filter(item => item.id !== newBurst.id));
    }, 850);
  };

  const menuItems = [
    { id: 'home', label: 'Beranda / Dashboard', shortLabel: 'Beranda', icon: Home },
    { id: 'discussion', label: 'Ruang Diskusi', shortLabel: 'Diskusi', icon: MessageSquare },
    { id: 'tasks', label: 'Tugas & Jadwal', shortLabel: 'Tugas', icon: CalendarCheck },
    { id: 'quiz', label: 'Kuis & Laporan', shortLabel: 'Kuis', icon: BarChart3 },
    { id: 'notifications', label: 'Pusat Notifikasi', shortLabel: 'Notif', icon: Bell, badge: 2 }
  ];

  // ===================================================================
  // 🎭 PENGATURAN WARNA MODE MALAM & SIANG SPESIFIK TIAP TAHAP
  // Menyebut nama user (Faris) di setiap tahap dan ringkas tanpa teks berlebih
  // ===================================================================
  const stageThemeConfig = {
    1: {
      title: "Kepompong Kristal 💎",
      greeting: "Faris • Kepompong Kristal 💎",
      badge: "Evolusi Tahap I • Level 1–4",
      bgGradient: isDarkMode 
        ? "bg-gradient-to-r from-[#041E34] via-[#083344] to-[#02182B] border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.35)]" 
        : "bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-200 border-sky-300 text-slate-900 shadow-sky-300/30",
      accentBorder: "border-2 border-cyan-400/80",
      cornerComponent: <CrystalCornerElements />,
      mascotComponent: <CrystalCocoonMascot className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56" isDark={isDarkMode} />,
      textColor: isDarkMode ? "text-cyan-100" : "text-slate-900",
      titleColor: isDarkMode ? "text-transparent bg-gradient-to-r from-white via-cyan-100 to-sky-200 bg-clip-text" : "text-slate-900",
      badgeStyle: isDarkMode ? "bg-cyan-500/25 text-cyan-200 border border-cyan-400/50" : "bg-white/30 text-slate-800 border border-white/40",
      progressFill: isDarkMode ? "bg-gradient-to-r from-cyan-400 to-white" : "bg-white",
      progress: "100% Fase Ini Tuntas"
    },
    2: {
      title: "Morpho Muda 🌿",
      greeting: "Faris • Morpho Muda 🌿",
      badge: "Evolusi Tahap II • Level 5–9",
      bgGradient: isDarkMode 
        ? "bg-gradient-to-r from-[#03261F] via-[#064E3B] to-[#021F19] border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.35)]" 
        : "bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400 border-teal-300 text-white shadow-teal-400/20",
      accentBorder: "border-2 border-emerald-400/80",
      cornerComponent: <NatureVineCornerElements />,
      mascotComponent: <YoungMorphoMascot className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60" isDark={isDarkMode} />,
      textColor: isDarkMode ? "text-emerald-100" : "text-white",
      titleColor: isDarkMode ? "text-transparent bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text" : "text-white",
      badgeStyle: isDarkMode ? "bg-emerald-500/25 text-emerald-200 border border-emerald-400/50" : "bg-white/20 text-white border border-white/30",
      progressFill: isDarkMode ? "bg-gradient-to-r from-emerald-400 to-teal-100" : "bg-white",
      progress: "100% Fase Ini Tuntas"
    },
    3: {
      title: "Radiant Morpho 🦋",
      greeting: "Faris • Radiant Morpho 🦋",
      badge: "Evolusi Tahap III • Level 10–15 (Aktif)",
      bgGradient: isDarkMode 
        ? "bg-gradient-to-r from-[#061838] via-[#0F2D6B] to-[#04122E] border-sky-400 shadow-[0_0_35px_rgba(56,189,248,0.4)]" 
        : "bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 border-sky-300 text-white shadow-sky-400/20",
      accentBorder: "border-2 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)]",
      cornerComponent: <NeonWingCornerElements />,
      mascotComponent: <RadiantMorphoMascot className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64" isDark={isDarkMode} />,
      textColor: isDarkMode ? "text-sky-100" : "text-white",
      titleColor: isDarkMode ? "text-transparent bg-gradient-to-r from-white via-sky-100 to-cyan-200 bg-clip-text" : "text-white",
      badgeStyle: isDarkMode ? "bg-sky-500/25 text-sky-200 border border-sky-400/50" : "bg-white/20 text-white border border-white/30",
      progressFill: isDarkMode ? "bg-gradient-to-r from-cyan-400 to-white" : "bg-white",
      progress: "78% Selesai (780 / 1.000 XP)"
    },
    4: {
      title: "Golden Emperor Morpho 👑",
      greeting: "Faris • Golden Emperor 👑",
      badge: "Evolusi Tahap IV • Level 16+ (Gelar Puncak)",
      bgGradient: isDarkMode 
        ? "bg-gradient-to-r from-[#2B1800] via-[#452702] to-[#1F1000] border-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.5)]" 
        : "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 border-amber-300 text-slate-950 shadow-amber-400/30",
      accentBorder: "border-2 border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.4)]",
      cornerComponent: <ImperialGoldCornerElements />,
      mascotComponent: <GoldenEmperorMascot className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64" isDark={isDarkMode} />,
      textColor: isDarkMode ? "text-amber-100" : "text-slate-950",
      titleColor: isDarkMode ? "text-transparent bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text" : "text-slate-950",
      badgeStyle: isDarkMode ? "bg-amber-500/25 text-amber-200 border border-amber-400/50" : "bg-slate-900/10 text-slate-900 border border-slate-900/20",
      progressFill: isDarkMode ? "bg-gradient-to-r from-yellow-300 to-amber-100" : "bg-slate-900",
      progress: "Terkunci (Butuh 220 XP lagi)"
    }
  };

  const currentTheme = stageThemeConfig[evolutionStage];

  return (
    <div className={`min-h-screen relative transition-colors duration-500 font-sans ${
      isDarkMode ? 'bg-[#0B132B] text-slate-100' : 'bg-[#F0F9FF] text-slate-800'
    }`}>
      
      {/* 1. Kupu-Kupu Latar Belakang (Bercahaya di Mode Malam) */}
      <BackgroundButterflies isDark={isDarkMode} />

      {/* 2. Efek Partikel Kupu-Kupu Terbang saat Klik Menu Navigasi */}
      <ButterflyBurstEffect bursts={bursts} isDark={isDarkMode} />

      {/* 3. Modal Ruang Fokus Belajar Zen Pomodoro */}
      <ZenFocusModal 
        isOpen={isZenModeOpen} 
        onClose={() => setIsZenModeOpen(false)} 
        isDark={isDarkMode} 
      />

      {/* 4. Slide-Over Drawer: Misi Belum Dikerjakan (Opsi B) */}
      <PendingTasksDrawer
        isOpen={isPendingTasksDrawerOpen}
        onClose={() => setIsPendingTasksDrawerOpen(false)}
        isDark={isDarkMode}
        tasks={pendingTasks}
        onGoToTasks={() => setActiveTab('tasks')}
        onCompleteTask={handleCompleteTask}
      />

      {/* 5. Modal Kuis Interaktif (Playable Quiz Arena) */}
      <InteractiveQuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        onQuizComplete={(xp) => addXP(xp)}
        isDark={isDarkMode}
      />

      {/* 6. Modal Tambah Misi Tugas Baru */}
      <AddTaskModal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        onAddTask={handleAddNewTask}
        isDark={isDarkMode}
      />

      {/* 7. Modal Galeri Lencana Prestasi (Morpho Badges) */}
      <BadgesGalleryModal
        isOpen={isBadgesModalOpen}
        onClose={() => setIsBadgesModalOpen(false)}
        isDark={isDarkMode}
        completedCount={completedTasksCount}
      />

      {/* 8. Modal Selebrasi Naik Level Metamorfosis */}
      <LevelUpCelebrationModal
        isOpen={isLevelUpModalOpen}
        onClose={() => setIsLevelUpModalOpen(false)}
        newLevel={newLevelReached}
        isDark={isDarkMode}
      />

      <div className="relative z-10 min-h-screen flex flex-col md:flex-row antialiased">

        {/* ============================================================ */}
        {/* 💻 SIDEBAR NAVIGASI (TABLET & LAPTOP/PC)                    */}
        {/* ============================================================ */}
        <aside className={`hidden md:flex flex-col w-64 lg:w-72 p-5 shrink-0 sticky top-0 h-screen justify-between z-30 transition-colors duration-400 border-r ${
          isDarkMode 
            ? 'bg-[#111C3A]/90 backdrop-blur-xl border-sky-900/60 shadow-[4px_0_30px_rgba(0,0,0,0.4)]' 
            : 'bg-white/90 backdrop-blur-xl border-sky-100 shadow-[4px_0_24px_-10px_rgba(14,165,233,0.1)]'
        }`}>
          <div className="space-y-4">
            
            {/* Logo Brand StudyMorpho */}
            <div className="flex items-center space-x-3 px-2 pt-1">
              <RadiantMorphoMascot className="w-10 h-10" isDark={isDarkMode} />
              <div>
                <span className="text-lg font-black tracking-tight bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
                  StudyMorpho
                </span>
                <p className="text-[10px] text-sky-400 font-semibold tracking-wide">Gamified Learning Hub</p>
              </div>
            </div>

            {/* Kotak Level Pelajar & Progres XP Dinamis */}
            <div className={`p-3.5 rounded-2xl border transition-colors ${
              isDarkMode 
                ? 'bg-gradient-to-br from-[#1C2C54] to-[#121E3E] border-sky-800/80' 
                : 'bg-gradient-to-br from-sky-50 to-cyan-50/70 border-sky-100'
            }`}>
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center space-x-1.5">
                  <span className="text-xs font-black text-sky-400">Lv. {userLevel}</span>
                  <span className={`text-[11px] font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Radiant Morpho</span>
                </div>
                <div className="flex items-center space-x-1 text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                  <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>5 Hari</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>EXP Belajar</span>
                  <span className="font-bold text-sky-400">{userXP} / 1.000 XP</span>
                </div>
                <div className="w-full bg-slate-700/20 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-sky-500 to-cyan-400 h-full rounded-full transition-all duration-700" 
                    style={{ width: `${Math.min(100, Math.max(8, (userXP / 1000) * 100))}%` }}
                  ></div>
                </div>
              </div>

              {/* Tombol Akses Galeri Lencana */}
              <button
                onClick={() => setIsBadgesModalOpen(true)}
                className="mt-2.5 w-full py-1.5 px-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 text-[10px] font-extrabold text-sky-400 flex items-center justify-center space-x-1.5 transition"
              >
                <Trophy className="w-3 h-3 text-amber-400" />
                <span>Koleksi Lencana ({completedTasksCount >= 1 ? 4 : 3}/6)</span>
              </button>
            </div>

            {/* Tombol Akses Ruang Fokus Zen Pomodoro */}
            <button
              onClick={() => setIsZenModeOpen(true)}
              className="w-full p-3 rounded-2xl bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-sky-600/30 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center space-x-2.5">
                <Sparkles className="w-4 h-4 text-cyan-200 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Ruang Fokus Zen ⏱️</span>
              </div>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Navigasi Menu Utama */}
            <nav className="space-y-1.5 pt-1">
              <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Menu Utama
              </p>
              {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={(e) => triggerButterflyBurst(e, item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all duration-200 group relative overflow-hidden ${
                      isActive
                        ? isDarkMode
                          ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/30 translate-x-1.5'
                          : 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/25 translate-x-1'
                        : isDarkMode
                          ? 'text-slate-300 hover:text-sky-300 hover:bg-sky-900/30'
                          : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50/80'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                        isActive ? 'text-white' : 'text-sky-400'
                      }`} />
                      <span>{item.label}</span>
                    </div>

                    {item.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                        isActive ? 'bg-white text-sky-600' : 'bg-sky-500/20 text-sky-400'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Mode Gelap/Terang & Profil di Bawah Sidebar */}
          <div className="space-y-3 pt-3 border-t border-sky-900/30">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl border text-xs font-bold transition-all ${
                isDarkMode 
                  ? 'bg-sky-950/70 border-sky-800 text-sky-300 hover:bg-sky-900/60 shadow-inner' 
                  : 'bg-white border-sky-200 text-slate-700 hover:bg-sky-50 shadow-xs'
              }`}
            >
              <div className="flex items-center space-x-2">
                {isDarkMode ? <Moon className="w-4 h-4 text-cyan-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
                <span>{isDarkMode ? 'Mode Malam 🌙' : 'Mode Siang ☀️'}</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-md font-extrabold ${
                isDarkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-sky-100 text-sky-700'
              }`}>
                Ganti
              </span>
            </button>

            <div className={`p-3 rounded-2xl border flex items-center justify-between ${
              isDarkMode ? 'bg-[#18264B] border-sky-900/50' : 'bg-white border-sky-100'
            }`}>
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 to-cyan-300 p-0.5">
                  <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold text-xs ${
                    isDarkMode ? 'bg-slate-900 text-sky-400' : 'bg-white text-sky-700'
                  }`}>
                    FA
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold">Faris</div>
                  <div className="text-[10px] text-sky-400 font-medium">Informatika</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* ============================================================ */}
        {/* 📱 HEADER MOBILE (LAYAR HP)                                  */}
        {/* ============================================================ */}
        <header className={`md:hidden sticky top-0 z-30 px-4 py-3 border-b flex items-center justify-between backdrop-blur-xl transition-colors duration-400 ${
          isDarkMode ? 'bg-[#0B132B]/90 border-sky-900/60' : 'bg-white/90 border-sky-100'
        }`}>
          <div className="flex items-center space-x-2">
            <RadiantMorphoMascot className="w-8 h-8" isDark={isDarkMode} />
            <div>
              <span className="text-sm font-black bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                StudyMorpho
              </span>
              <div className="flex items-center space-x-1.5 text-[9px] text-amber-500 font-bold">
                <Flame className="w-3 h-3 fill-amber-500" />
                <span>Streak 5 Hari!</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => setIsBadgesModalOpen(true)}
              className={`p-2 rounded-xl border transition-colors ${
                isDarkMode ? 'bg-sky-950 border-sky-800 text-amber-400' : 'bg-sky-50 border-sky-100 text-amber-500'
              }`}
              title="Koleksi Lencana"
            >
              <Trophy className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsZenModeOpen(true)}
              className="p-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-xs"
              title="Ruang Fokus Zen"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-xl border transition-colors ${
                isDarkMode ? 'bg-sky-950 border-sky-800 text-cyan-400' : 'bg-sky-50 border-sky-100 text-amber-500'
              }`}
            >
              {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-cyan-300 p-0.5">
              <div className={`w-full h-full rounded-full flex items-center justify-center font-bold text-[11px] ${
                isDarkMode ? 'bg-slate-900 text-sky-400' : 'bg-white text-sky-700'
              }`}>
                FA
              </div>
            </div>
          </div>
        </header>

        {/* ============================================================ */}
        {/* 🖥️ KONTEN UTAMA APLIKASI (RESPONSIF)                         */}
        {/* ============================================================ */}
        <main className="flex-1 flex flex-col min-w-0 pb-24 md:pb-10">

          {/* Top Bar Desktop */}
          <div className={`hidden md:flex items-center justify-between px-8 py-3.5 border-b backdrop-blur-md sticky top-0 z-20 transition-colors duration-400 ${
            isDarkMode ? 'bg-[#0B132B]/70 border-sky-900/60' : 'bg-white/60 border-sky-100'
          }`}>
            <div className="relative w-80">
              <Search className="w-4 h-4 text-sky-400 absolute left-3.5 top-2.5" />
              <input
                type="text"
                placeholder="Cari materi kuis, tugas, atau diskusi..."
                readOnly
                className={`w-full rounded-xl pl-9 pr-4 py-2 text-xs border focus:outline-none transition-colors ${
                  isDarkMode 
                    ? 'bg-[#152248] border-sky-900/80 text-slate-100 placeholder-slate-400' 
                    : 'bg-white border-sky-100 text-slate-800 placeholder-slate-400'
                }`}
              />
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsZenModeOpen(true)}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm shadow-sky-500/25 hover:from-sky-400 hover:to-cyan-400 transition transform active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                <span>Masuk Ruang Zen ⏱️</span>
              </button>

              <div className="text-right">
                <div className="text-xs font-bold">Senin, 20 Oktober 2026</div>
                <div className="text-[10px] text-sky-400 font-semibold">Pekan Pembelajaran #8</div>
              </div>
              <button 
                onClick={(e) => triggerButterflyBurst(e, 'notifications')}
                className={`p-2.5 rounded-xl border relative transition-colors ${
                  isDarkMode ? 'bg-[#152248] border-sky-900 text-sky-400' : 'bg-white border-sky-100 text-sky-600'
                }`}
              >
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 rounded-full bg-sky-400 absolute top-2 right-2 animate-pulse"></span>
              </button>
            </div>
          </div>

          {/* Area Konten Sesuai Tab Aktif */}
          <div className="p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">

            {/* ======================================================== */}
            {/* 1️⃣ MODUL 1: BERANDA / DASHBOARD                          */}
            {/* ======================================================== */}
            {activeTab === 'home' && (
              <div className="space-y-6">

                {/* ==================================================== */}
                {/* 🌟 HERO BANNER METAMORFOSIS DINAMIS                  */}
                {/* Ringkas, menyebut nama user & gelar evolusi saat ini */}
                {/* Maskot pada layar laptop digeser lebih ke kiri       */}
                {/* ==================================================== */}
                <div className={`relative overflow-hidden rounded-3xl p-6 lg:p-8 shadow-2xl transition-all duration-700 ${currentTheme.bgGradient} ${currentTheme.accentBorder}`}>
                  
                  {/* Ornamen Elemen Pinggiran & Sudut Khusus Tahap Ini */}
                  {currentTheme.cornerComponent}

                  {/* Maskot Besar: Pada Layar Laptop (md:/lg:) Digeser Lebih ke Kiri & Proporsional */}
                  <div className="absolute right-2 sm:right-6 md:right-16 lg:right-28 top-1/2 -translate-y-1/2 opacity-40 sm:opacity-50 md:opacity-80 lg:opacity-95 pointer-events-none transition-all duration-700 transform scale-105 md:scale-110 lg:scale-115">
                    {currentTheme.mascotComponent}
                  </div>

                  <div className="relative z-10 max-w-sm sm:max-w-md lg:max-w-lg space-y-2.5">
                    {/* Badge Tingkatan & Gelar Evolusi */}
                    <div className={`inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold ${currentTheme.badgeStyle}`}>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{currentTheme.badge}</span>
                    </div>

                    {/* Nama User & Wujud Gelar Evolusi Saat Ini */}
                    <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight ${currentTheme.titleColor}`}>
                      {currentTheme.greeting}
                    </h1>
                  </div>

                  {/* Progres Tingkatan Tahap Ini */}
                  <div className="relative z-10 mt-6 pt-3.5 border-t border-current/20 max-w-xs sm:max-w-sm md:max-w-md">
                    <div className={`flex justify-between text-xs mb-1.5 font-bold ${currentTheme.textColor}`}>
                      <span>Progres {currentTheme.title}</span>
                      <span>{currentTheme.progress}</span>
                    </div>
                    <div className="w-full bg-black/25 h-2.5 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full w-[78%] transition-all duration-700 ${currentTheme.progressFill}`}></div>
                    </div>
                  </div>
                </div>

                {/* ==================================================== */}
                {/* 🌿 TAMAN METAMORFOSIS (KLIK UNTUK MENGGANTI TAHAP)   */}
                {/* ==================================================== */}
                <div className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-[#132042] border-sky-900/60 shadow-lg' 
                    : 'bg-white border-sky-100 shadow-xs'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base flex items-center space-x-2">
                        <Compass className="w-4 h-4 text-sky-400" />
                        <span>Taman Metamorfosis (Klik Kartu untuk Mencoba Mutasi!)</span>
                      </h3>
                      <p className="text-xs text-sky-400 mt-0.5">
                        Setiap kartu yang kamu klik akan mengubah wujud maskot besar dan ornamen bingkai di atas
                      </p>
                    </div>
                    <span className="self-start sm:self-auto text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      Tersisa 220 XP ke Tahap IV
                    </span>
                  </div>

                  {/* 4 Kartu Tahap Metamorfosis (Bisa Diklik Langsung!) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    {[
                      {
                        stageNum: 1,
                        stage: 'Tahap I',
                        title: 'Kepompong Kristal',
                        lv: 'Level 1–4',
                        status: 'Tuntas ✓',
                        icon: '💎',
                        desc: 'Cangkang kristal es pelindung pengetahuan awal.'
                      },
                      {
                        stageNum: 2,
                        stage: 'Tahap II',
                        title: 'Morpho Muda',
                        lv: 'Level 5–9',
                        status: 'Tuntas ✓',
                        icon: '🌿',
                        desc: 'Sayap hijau toska segar aktif menjelajahi materi.'
                      },
                      {
                        stageNum: 3,
                        stage: 'Tahap III',
                        title: 'Radiant Morpho',
                        lv: 'Level 10–15',
                        status: 'Sedang Aktif (78%)',
                        icon: '🦋',
                        desc: 'Sayap biru elektrik bercahaya gagah di malam hari.'
                      },
                      {
                        stageNum: 4,
                        stage: 'Tahap IV',
                        title: 'Golden Emperor',
                        lv: 'Level 16+',
                        status: 'Terkunci 🔒',
                        icon: '👑',
                        desc: 'Sayap kaisar emas 24K Swallowtail & mahkota permata.'
                      }
                    ].map((step) => {
                      const isSelected = evolutionStage === step.stageNum;
                      return (
                        <div
                          key={step.stageNum}
                          onClick={() => setEvolutionStage(step.stageNum)}
                          className={`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer transform hover:-translate-y-1 ${
                            isSelected
                              ? isDarkMode
                                ? step.stageNum === 4
                                  ? 'bg-gradient-to-b from-[#382003] to-[#1F1200] border-amber-400 shadow-lg shadow-amber-500/30 ring-2 ring-amber-400'
                                  : step.stageNum === 2
                                  ? 'bg-gradient-to-b from-[#063F32] to-[#03241C] border-emerald-400 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-400'
                                  : step.stageNum === 1
                                  ? 'bg-gradient-to-b from-[#07365C] to-[#041F35] border-cyan-400 shadow-lg shadow-cyan-500/30 ring-2 ring-cyan-400'
                                  : 'bg-gradient-to-b from-[#1C2F60] to-[#122146] border-sky-400 shadow-lg shadow-sky-500/30 ring-2 ring-sky-400'
                                : 'bg-gradient-to-b from-sky-50 to-white border-sky-500 shadow-md shadow-sky-400/30 ring-2 ring-sky-500'
                              : isDarkMode
                                ? 'bg-[#0E1936] border-sky-900/40 opacity-70 hover:opacity-100 hover:border-sky-700'
                                : 'bg-slate-50/70 border-slate-200/80 opacity-70 hover:opacity-100 hover:border-sky-300'
                          }`}
                        >
                          {isSelected && (
                            <div className="absolute top-0 right-0 bg-sky-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-bl-lg animate-pulse">
                              SEDANG DIPILIH ✓
                            </div>
                          )}

                          <div>
                            <div className="flex items-center space-x-2.5 mb-2">
                              <span className="text-2xl">{step.icon}</span>
                              <div>
                                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">{step.stage}</span>
                                <h4 className="text-xs font-black leading-tight">{step.title}</h4>
                              </div>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                              {step.desc}
                            </p>
                          </div>

                          <div className="mt-4 pt-2.5 border-t border-sky-900/20 flex justify-between items-center text-[10px] font-bold">
                            <span className="text-slate-400">{step.lv}</span>
                            <span className={isSelected ? 'text-cyan-400 font-extrabold' : 'text-slate-400'}>
                              {step.status}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4 Kartu Metrik Belajar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { title: 'Tugas Aktif', value: `${pendingTasks.length} Misi`, sub: `${pendingTasks.length} tugas menanti`, icon: Clock, col: 'text-rose-400' },
                    { title: 'Streak Belajar', value: '5 Hari 🔥', sub: 'Pertahankan apimu!', icon: Flame, col: 'text-amber-400' },
                    { title: 'Diskusi Baru', value: '12 Topik', sub: '+5 pesan belum dibaca', icon: MessageSquare, col: 'text-sky-400' },
                    { title: 'Rata-Rata Nilai', value: '89.4 (A)', sub: 'Top 5% Kelas', icon: Award, col: 'text-emerald-400' }
                  ].map((st, i) => {
                    const Icon = st.icon;
                    return (
                      <div
                        key={i}
                        className={`p-4 rounded-3xl border transition-all duration-300 shadow-xs flex flex-col justify-between ${
                          isDarkMode 
                            ? 'bg-[#132042] border-sky-900/60 hover:border-sky-500' 
                            : 'bg-white border-sky-100 hover:border-sky-300'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-semibold text-slate-400">{st.title}</span>
                          <Icon className={`w-4 h-4 ${st.col}`} />
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-black">{st.value}</div>
                          <span className={`text-[11px] font-semibold ${st.col}`}>{st.sub}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 2 Kolom: Ringkasan Jadwal Kuliah Hari Ini & Tugas Terdekat */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                  {/* Ringkasan Jadwal Kuliah Hari Ini */}
                  <div className={`p-5 sm:p-6 rounded-3xl border transition-colors flex flex-col justify-between ${
                    isDarkMode ? 'bg-[#132042] border-sky-900/60' : 'bg-white border-sky-100 shadow-xs'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-sky-400" />
                          <h3 className="font-bold text-sm">Jadwal Kuliah Hari Ini</h3>
                          <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30">
                            Senin, 20 Okt
                          </span>
                        </div>

                        {/* Tombol Cepat Buka Tab Tugas & Jadwal Lengkap */}
                        <button
                          onClick={(e) => triggerButterflyBurst(e, 'tasks')}
                          className="text-xs font-bold text-sky-400 hover:underline flex items-center space-x-1"
                          title="Buka jadwal lengkap Senin - Jumat dan kalender di tab Tugas & Jadwal"
                        >
                          <span>Jadwal Lengkap</span>
                          <span>➔</span>
                        </button>
                      </div>

                      {/* Daftar Mata Kuliah Hari Ini */}
                      <div className="space-y-2.5">
                        {weeklyScheduleData['Senin']?.map((j, i) => (
                          <div key={i} className={`flex items-center justify-between p-3.5 rounded-2xl border transition ${
                            isDarkMode 
                              ? 'bg-[#1A2B56] border-sky-900/50 hover:bg-[#1E3264]' 
                              : 'bg-sky-50/50 border-sky-100 hover:bg-sky-50'
                          }`}>
                            <div>
                              <div className="font-bold text-xs sm:text-sm">{j.course}</div>
                              <div className="text-xs text-slate-400 mt-0.5">{j.room} • {j.lecturer}</div>
                            </div>
                            <span className={`text-xs font-bold px-2.5 py-1.5 rounded-xl border shrink-0 ${
                              isDarkMode ? 'bg-[#0E1B38] border-sky-800 text-cyan-300' : 'bg-white border-sky-200 text-sky-700'
                            }`}>
                              {j.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Banner Navigasi ke Tab Tugas & Kalender */}
                    <div className={`mt-4 p-3.5 rounded-2xl border flex items-center justify-between text-xs transition ${
                      isDarkMode ? 'bg-[#0E1A38] border-sky-900/60' : 'bg-sky-50/60 border-sky-100'
                    }`}>
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-black">
                          📅
                        </div>
                        <div>
                          <div className="font-bold text-xs">Jadwal Mingguan & Kalender</div>
                          <div className="text-[11px] text-slate-400">Tersedia lengkap di bar Tugas & Jadwal</div>
                        </div>
                      </div>
                      <button
                        onClick={(e) => triggerButterflyBurst(e, 'tasks')}
                        className="text-xs font-bold text-sky-400 hover:text-cyan-300 flex items-center space-x-1"
                      >
                        <span>Buka Kalender</span>
                        <span>➔</span>
                      </button>
                    </div>
                  </div>

                  {/* Tugas & Misi Terdekat (Tersinkronisasi & Interaktif Selesai) */}
                  <div className={`p-5 sm:p-6 rounded-3xl border transition-colors ${
                    isDarkMode ? 'bg-[#132042] border-sky-900/60' : 'bg-white border-sky-100 shadow-xs'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-sm flex items-center space-x-2">
                        <CalendarCheck className="w-4 h-4 text-sky-400" />
                        <span>Misi Tugas Terdekat ({pendingTasks.length})</span>
                      </h3>
                      <button 
                        onClick={(e) => triggerButterflyBurst(e, 'tasks')} 
                        className="text-xs font-bold text-sky-400 hover:underline"
                      >
                        Lihat Semua ({tasksList.length})
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {pendingTasks.length === 0 ? (
                        <div className="p-8 text-center text-slate-400 space-y-2">
                          <span className="text-4xl block">🎉</span>
                          <p className="font-bold text-xs sm:text-sm">Seluruh Tugas Telah Diselesaikan!</p>
                          <p className="text-[11px] text-sky-400">Semua XP telah dikumpulkan. Pertahankan prestasimu!</p>
                        </div>
                      ) : (
                        pendingTasks.slice(0, 3).map((t) => (
                          <div key={t.id} className={`p-3.5 rounded-2xl border transition flex items-center justify-between ${
                            isDarkMode ? 'bg-[#1A2B56] border-sky-900/50' : 'bg-white border-sky-100'
                          }`}>
                            <div>
                              <div className="font-bold text-xs sm:text-sm">{t.title}</div>
                              <div className="text-xs text-slate-400 mt-0.5">⏰ {t.deadline}</div>
                            </div>
                            <div className="flex items-center space-x-2 shrink-0">
                              <span className={`text-xs font-bold px-2 py-0.5 rounded-xl border ${t.badge}`}>
                                {t.reward}
                              </span>
                              <button
                                onClick={() => handleCompleteTask(t.id)}
                                className="px-2.5 py-1 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center space-x-1 transition"
                                title="Tandai selesai & klaim XP"
                              >
                                <Check className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Selesai</span>
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* 2️⃣ MODUL 2: RUANG DISKUSI                                */}
            {/* ======================================================== */}
            {activeTab === 'discussion' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg sm:text-xl font-black flex items-center space-x-2">
                      <span>Ruang Diskusi & Komunitas</span>
                      <RadiantMorphoMascot className="w-5 h-5" isDark={isDarkMode} />
                    </h2>
                    <p className="text-xs text-sky-400">Tanya jawab dan bagikan solusi belajar dengan sesama</p>
                  </div>
                  <button className="self-start sm:self-auto bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs font-bold px-4 py-2.5 rounded-2xl shadow-md shadow-sky-500/25 flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Mulai Topik Baru (+50 XP)</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Bagaimana cara memahami konsep Rekursi dengan cepat?',
                      author: 'Budi Santoso',
                      time: '10 menit lalu',
                      replies: 8,
                      tag: 'Pemrograman',
                      preview: 'Saya masih sering mengalami stack overflow ketika memecahkan persoalan pohon biner...'
                    },
                    {
                      title: 'Tips pembagian grid dan spacing untuk aplikasi mobile',
                      author: 'Siti Rahma',
                      time: '1 jam lalu',
                      replies: 15,
                      tag: 'Desain UI',
                      preview: 'Apakah menggunakan 8pt grid system masih relevan untuk berbagai rasio layar Android modern saat ini?'
                    },
                    {
                      title: 'Rumus cepat mencari determinan matriks 4x4',
                      author: 'Ahmad Dani',
                      time: '3 jam lalu',
                      replies: 6,
                      tag: 'Matematika',
                      preview: 'Metode ekspansi kofaktor terasa agak panjang, apakah ada metode reduksi baris yang lebih efisien?'
                    },
                    {
                      title: 'Rekomendasi dataset untuk studi kasus machine learning',
                      author: 'Dewi Lestari',
                      time: '5 jam lalu',
                      replies: 12,
                      tag: 'Sains',
                      preview: 'Ada yang tahu repositori dataset publik yang rapi untuk klasifikasi citra daun herbal lokal?'
                    }
                  ].map((d, i) => (
                    <div 
                      key={i} 
                      className={`p-5 rounded-3xl border transition-all duration-300 space-y-3 cursor-pointer ${
                        isDarkMode 
                          ? 'bg-[#132042] border-sky-900/60 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-950/80' 
                          : 'bg-white border-sky-100 shadow-xs hover:border-sky-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex justify-between items-center text-xs">
                        <span className={`font-bold px-2.5 py-1 rounded-full border ${
                          isDarkMode ? 'bg-sky-950 border-sky-800 text-sky-400' : 'bg-sky-50 border-sky-100 text-sky-600'
                        }`}>
                          #{d.tag}
                        </span>
                        <span className="text-slate-400">{d.time}</span>
                      </div>
                      <h3 className="text-sm font-bold leading-snug">{d.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{d.preview}</p>
                      <div className={`flex justify-between items-center pt-3 border-t text-xs ${
                        isDarkMode ? 'border-sky-900/40 text-slate-400' : 'border-sky-50 text-slate-400'
                      }`}>
                        <span>Oleh <strong className={isDarkMode ? 'text-slate-200' : 'text-slate-700'}>{d.author}</strong></span>
                        <span className="text-sky-400 font-bold bg-sky-500/10 px-2.5 py-1 rounded-xl">
                          💬 {d.replies} Balasan
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* 3️⃣ MODUL 3: TUGAS DAN JADWAL                             */}
            {/* ======================================================== */}
            {activeTab === 'tasks' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg sm:text-xl font-black flex items-center space-x-2">
                      <span>Misi Tugas & Jadwal Perkuliahan</span>
                      <RadiantMorphoMascot className="w-5 h-5" isDark={isDarkMode} />
                    </h2>
                    <p className="text-xs text-sky-400">Kelola jadwal kuliah harian, kalender akademik, dan selesaikan misi tugas belajar</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    {/* Tombol Cepat Buka Drawer Misi Tertunda */}
                    <button
                      onClick={() => setIsPendingTasksDrawerOpen(true)}
                      className={`px-3.5 py-2.5 rounded-2xl border text-xs font-bold flex items-center space-x-1.5 transition ${
                        isDarkMode
                          ? 'bg-[#152349] border-sky-800 text-sky-300 hover:border-sky-400'
                          : 'bg-white border-sky-200 text-sky-700 hover:border-sky-300 shadow-xs'
                      }`}
                      title="Lihat tugas yang belum dikerjakan"
                    >
                      <CalendarCheck className="w-4 h-4 text-sky-400" />
                      <span>Misi Tertunda</span>
                      <span className="w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center">
                        {pendingTasks.length}
                      </span>
                    </button>
                    {/* Tombol Tambah Misi Baru Interaktif */}
                    <button 
                      onClick={() => setIsAddTaskModalOpen(true)}
                      className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs font-bold px-4 py-2.5 rounded-2xl shadow-md shadow-sky-500/25 hover:from-sky-400 hover:to-cyan-400 flex items-center space-x-2 transition transform active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Misi Baru</span>
                    </button>
                  </div>
                </div>

                {/* 2 Kolom: Jadwal Perkuliahan (Senin - Jumat) & Kalender Akademik (Oktober 2026) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                  {/* Kolom 1: Jadwal Perkuliahan Interaktif (Senin - Jumat) */}
                  <div className={`p-5 sm:p-6 rounded-3xl border transition-colors flex flex-col justify-between ${
                    isDarkMode ? 'bg-[#132042] border-sky-900/60' : 'bg-white border-sky-100 shadow-xs'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-sky-400" />
                          <h3 className="font-bold text-sm">Jadwal Perkuliahan Mingguan</h3>
                        </div>
                        <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          {selectedDay}
                        </span>
                      </div>

                      {/* Bar Tombol Hari: Senin sampai Jumat */}
                      <div className={`flex space-x-1 p-1 rounded-2xl border mb-4 overflow-x-auto ${
                        isDarkMode ? 'bg-[#0E1935] border-sky-900/50' : 'bg-slate-50 border-sky-100'
                      }`}>
                        {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'].map((day) => {
                          const isSelected = selectedDay === day;
                          return (
                            <button
                              key={day}
                              onClick={() => setSelectedDay(day)}
                              className={`flex-1 min-w-[54px] py-1.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                                isSelected
                                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/30'
                                  : isDarkMode
                                    ? 'text-slate-400 hover:text-sky-300 hover:bg-sky-900/30'
                                    : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>

                      {/* Daftar Mata Kuliah Sesuai Hari Terpilih */}
                      <div className="space-y-2.5">
                        {weeklyScheduleData[selectedDay]?.map((j, i) => (
                          <div key={i} className={`flex items-center justify-between p-3.5 rounded-2xl border transition ${
                            isDarkMode 
                              ? 'bg-[#1A2B56] border-sky-900/50 hover:bg-[#1E3264]' 
                              : 'bg-sky-50/50 border-sky-100 hover:bg-sky-50'
                          }`}>
                            <div>
                              <div className="font-bold text-xs sm:text-sm">{j.course}</div>
                              <div className="text-xs text-slate-400 mt-0.5">{j.room} • {j.lecturer}</div>
                            </div>
                            <span className={`text-xs font-bold px-2.5 py-1.5 rounded-xl border shrink-0 ${
                              isDarkMode ? 'bg-[#0E1B38] border-sky-800 text-cyan-300' : 'bg-white border-sky-200 text-sky-700'
                            }`}>
                              {j.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-sky-900/30 flex items-center justify-between text-xs text-slate-400">
                      <span>Total 2 Sesi Kuliah pada hari {selectedDay}</span>
                      <span className="text-sky-400 font-semibold">Tatap Muka & Praktikum</span>
                    </div>
                  </div>

                  {/* Kolom 2: Kalender Akademik Interaktif (Oktober 2026) */}
                  <div className={`p-5 sm:p-6 rounded-3xl border transition-all ${
                    isDarkMode ? 'bg-[#132042] border-sky-900/60' : 'bg-white border-sky-100 shadow-xs'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-sky-400" />
                        <h3 className="font-bold text-sm">Kalender Akademik • Oktober 2026</h3>
                      </div>
                      <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400">
                        <span className="flex items-center space-x-1"><span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span><span>Tugas</span></span>
                        <span className="flex items-center space-x-1"><span className="w-2 h-2 rounded-full bg-sky-400 inline-block"></span><span>Kuliah</span></span>
                      </div>
                    </div>

                    {/* Header Nama Hari */}
                    <div className="grid grid-cols-7 gap-1 text-center mb-1">
                      {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((dayName, idx) => (
                        <div key={idx} className="text-[10px] font-bold text-slate-400">
                          {dayName}
                        </div>
                      ))}
                    </div>

                    {/* Grid Tanggal Bulan Oktober 2026 */}
                    <div className="grid grid-cols-7 gap-1">
                      {[
                        null, null, null, // 1 Okt 2026 adalah hari Kamis
                        1, 2, 3, 4,
                        5, 6, 7, 8, 9, 10, 11,
                        12, 13, 14, 15, 16, 17, 18,
                        19, 20, 21, 22, 23, 24, 25,
                        26, 27, 28, 29, 30, 31
                      ].map((dayNum, idx) => {
                        if (dayNum === null) {
                          return <div key={`empty-${idx}`} className="h-8" />;
                        }

                        const isSelected = selectedCalendarDate === dayNum;
                        const isToday = dayNum === 20; // 20 Oktober 2026
                        const hasTask = dayNum === 20 || dayNum === 21 || dayNum === 24;
                        const isWeekday = (idx % 7) < 5;

                        return (
                          <button
                            key={dayNum}
                            onClick={() => setSelectedCalendarDate(dayNum)}
                            className={`h-8 rounded-xl text-xs font-bold transition-all relative flex flex-col items-center justify-center ${
                              isSelected
                                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/30 scale-105 z-10'
                                : isToday
                                  ? isDarkMode
                                    ? 'bg-sky-900/60 border border-sky-400 text-cyan-300'
                                    : 'bg-sky-100 border border-sky-300 text-sky-800'
                                  : isDarkMode
                                    ? 'hover:bg-sky-900/30 text-slate-300'
                                    : 'hover:bg-sky-50 text-slate-700'
                            }`}
                          >
                            <span>{dayNum}</span>
                            <div className="flex space-x-0.5 absolute bottom-1">
                              {hasTask && <span className="w-1 h-1 rounded-full bg-rose-500"></span>}
                              {isWeekday && !isSelected && <span className="w-1 h-1 rounded-full bg-sky-400"></span>}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Info Detail Agenda Sesuai Tanggal Terpilih */}
                    <div className={`mt-3 p-3 rounded-xl border text-xs transition ${
                      isDarkMode ? 'bg-[#152349] border-sky-900/70' : 'bg-slate-50 border-sky-100'
                    }`}>
                      <div className="flex items-center justify-between font-bold mb-1">
                        <span className="text-sky-400 font-extrabold">Agenda {selectedCalendarDate} Oktober 2026</span>
                        {selectedCalendarDate === 20 && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-black">
                            HARI INI
                          </span>
                        )}
                      </div>
                      {selectedCalendarDate === 20 ? (
                        <div className="space-y-1 text-[11px] text-slate-300">
                          <p>📚 09:00 WIB: Kalkulus Lanjut • Gedung B.2</p>
                          <p>💻 13:00 WIB: Praktikum Basis Data • Lab Komputer 03</p>
                          <p className="text-rose-400 font-bold">⏰ 23:59 WIB: Deadline Tugas Kalkulus & Laporan AI</p>
                        </div>
                      ) : selectedCalendarDate === 21 ? (
                        <div className="space-y-1 text-[11px] text-slate-300">
                          <p>💻 08:00 WIB: Struktur Data • Gedung A.1</p>
                          <p>🌐 10:30 WIB: Jaringan Komputer • Lab 02</p>
                          <p className="text-amber-400 font-bold">⏰ 17:00 WIB: Deadline Implementasi API Backend</p>
                        </div>
                      ) : selectedCalendarDate === 24 ? (
                        <div className="space-y-1 text-[11px] text-slate-300">
                          <p className="text-rose-400 font-bold">⏰ 23:59 WIB: Deadline Analisis Kompleksitas Algoritma</p>
                          <p className="text-slate-400">💡 Hari tenang tanpa jadwal kuliah tatap muka.</p>
                        </div>
                      ) : (selectedCalendarDate % 7 === 3 || selectedCalendarDate % 7 === 4) ? (
                        <p className="text-[11px] text-slate-400">
                          🏖️ Akhir pekan! Waktu yang baik untuk istirahat atau mengumpulkan fokus belajar Pomodoro di Ruang Zen.
                        </p>
                      ) : (
                        <p className="text-[11px] text-slate-400">
                          📖 Sesi perkuliahan reguler dan asistensi mandiri sesuai jadwal mingguan.
                        </p>
                      )}
                    </div>
                  </div>

                </div>

                {/* Subtitle & Pemisah Bagian Misi Tugas */}
                <div className="pt-2 flex items-center justify-between">
                  <h3 className="font-extrabold text-sm sm:text-base flex items-center space-x-2">
                    <CheckCheck className="w-4 h-4 text-sky-400" />
                    <span>Daftar Misi & Tugas Akademik ({tasksList.length})</span>
                  </h3>
                  <span className="text-xs text-sky-400 font-semibold">
                    {pendingTasks.length} Belum Selesai • {completedTasksCount} Tuntas
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tasksList.map((item) => (
                    <div 
                      key={item.id} 
                      className={`p-5 rounded-3xl border transition-all duration-300 space-y-3 flex flex-col justify-between ${
                        isDarkMode ? 'bg-[#132042] border-sky-900/60' : 'bg-white border-sky-100 shadow-xs'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${
                            isDarkMode ? 'bg-[#0E1935] border-sky-800 text-sky-400' : 'bg-sky-50 border-sky-100 text-sky-600'
                          }`}>
                            {item.subject}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${item.badge}`}>
                            {item.reward}
                          </span>
                        </div>
                        <h3 className={`text-sm font-bold mt-2 ${item.status === 'Telah Dikumpulkan' ? 'line-through opacity-75' : ''}`}>
                          {item.title}
                        </h3>
                        <div className="flex items-center space-x-1.5 text-xs text-slate-400 mt-2">
                          <Clock className="w-3.5 h-3.5 text-sky-400" />
                          <span>{item.deadline}</span>
                        </div>
                      </div>

                      <div className={`flex justify-between items-center pt-3 border-t text-xs ${
                        isDarkMode ? 'border-sky-900/40' : 'border-sky-50'
                      }`}>
                        <span className="text-slate-400">
                          Status: <strong className={item.status === 'Telah Dikumpulkan' ? 'text-emerald-400' : isDarkMode ? 'text-slate-200' : 'text-slate-700'}>
                            {item.status}
                          </strong>
                        </span>

                        <div className="flex items-center space-x-2">
                          {item.status !== 'Telah Dikumpulkan' ? (
                            <button
                              onClick={() => handleCompleteTask(item.id)}
                              className="text-sky-400 font-bold hover:underline cursor-pointer flex items-center space-x-1"
                            >
                              <span>Selesaikan</span>
                              <span>➔</span>
                            </button>
                          ) : (
                            <span className="text-emerald-400 font-bold flex items-center space-x-1">
                              <CheckCheck className="w-4 h-4" />
                              <span>Tuntas ✓</span>
                            </span>
                          )}

                          <button
                            onClick={() => handleDeleteTask(item.id)}
                            className="p-1 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
                            title="Hapus Misi"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* 4️⃣ MODUL 4: KUIS DAN LAPORAN                             */}
            {/* ======================================================== */}
            {activeTab === 'quiz' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-black flex items-center space-x-2">
                    <span>Kuis & Arena Evaluasi Nilai</span>
                    <RadiantMorphoMascot className="w-5 h-5" isDark={isDarkMode} />
                  </h2>
                  <p className="text-xs text-sky-400">Uji pengetahuanmu dan kumpulkan poin prestasi</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                  {/* Visualisasi Grafik Batang Nilai */}
                  <div className={`lg:col-span-1 rounded-3xl p-6 text-white shadow-xl space-y-4 border ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-[#12234D] to-[#0A1633] border-sky-700/60 shadow-sky-950/70' 
                      : 'bg-gradient-to-br from-sky-500 to-cyan-500 border-sky-300 shadow-sky-400/20'
                  }`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-sky-200">Rata-Rata Kumulatif</span>
                        <div className="text-3xl font-black mt-1">89.4 <span className="text-sm font-normal text-sky-200">/ 100</span></div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-extrabold text-white">
                        Rank #3
                      </span>
                    </div>

                    <div className="pt-4 border-t border-white/20">
                      <div className="text-xs text-sky-100 mb-3 font-semibold">Riwayat 5 Kuis Terakhir:</div>
                      <div className="flex items-end justify-between h-32 px-2">
                        {[
                          { l: 'K-1', v: '75%', s: '75' },
                          { l: 'K-2', v: '88%', s: '88' },
                          { l: 'K-3', v: '82%', s: '82' },
                          { l: 'K-4', v: '95%', s: '95' },
                          { l: 'K-5', v: '90%', s: '90' }
                        ].map((bar, idx) => (
                          <div key={idx} className="flex flex-col items-center space-y-2">
                            <span className="text-xs font-bold text-white">{bar.s}</span>
                            <div className="w-8 sm:w-10 bg-black/25 rounded-t-lg h-20 flex items-end p-0.5">
                              <div className="w-full bg-gradient-to-t from-cyan-300 to-white rounded-t-md" style={{ height: bar.v }}></div>
                            </div>
                            <span className="text-[10px] text-sky-100">{bar.l}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Kuis Tersedia */}
                  <div className="lg:col-span-2 space-y-3">
                    <h3 className="font-bold text-sm uppercase tracking-wider">Kuis Siap Dikerjakan</h3>

                    {[
                      {
                        name: 'Evaluasi Pemrograman Web Lanjut (React & State)',
                        meta: '4 Pertanyaan Interaktif • Hadiah: +150 XP & Badge Quiz Champion',
                        subject: 'Teknologi Web',
                        status: 'Mulai Kuis',
                        isStart: true
                      },
                      {
                        name: 'Kuis Aljabar Linear & Matriks Transformasi',
                        meta: '15 Pertanyaan • Skor Anda: 92/100 (Predikat A)',
                        subject: 'Matematika',
                        status: 'Lihat Solusi',
                        isStart: false
                      },
                      {
                        name: 'Sains Data & Dasar Pembelajaran Mesin',
                        meta: '25 Pertanyaan • Skor Anda: 85/100 (Predikat B+)',
                        subject: 'Informatika',
                        status: 'Lihat Solusi',
                        isStart: false
                      }
                    ].map((q, idx) => (
                      <div 
                        key={idx} 
                        className={`p-5 rounded-3xl border transition flex items-center justify-between ${
                          isDarkMode ? 'bg-[#132042] border-sky-900/60' : 'bg-white border-sky-100 shadow-xs'
                        }`}
                      >
                        <div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                            isDarkMode ? 'bg-sky-950 border-sky-800 text-sky-400' : 'bg-sky-50 border-sky-100 text-sky-600'
                          }`}>
                            {q.subject}
                          </span>
                          <h4 className="text-sm font-bold mt-1">{q.name}</h4>
                          <p className="text-xs text-slate-400 mt-0.5">{q.meta}</p>
                        </div>

                        <button 
                          onClick={() => {
                            if (q.isStart) {
                              setIsQuizModalOpen(true);
                            }
                          }}
                          className={`text-xs font-bold px-4 py-2 rounded-xl transition ${
                            q.isStart 
                              ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 hover:bg-sky-600 cursor-pointer transform active:scale-95' 
                              : isDarkMode ? 'bg-sky-950 text-cyan-300 border border-sky-800' : 'bg-sky-50 text-sky-700 border border-sky-100'
                          }`}
                        >
                          {q.status}
                        </button>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* 5️⃣ MODUL 5: PUSAT NOTIFIKASI                             */}
            {/* ======================================================== */}
            {activeTab === 'notifications' && (
              <div className="space-y-6 max-w-4xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-black flex items-center space-x-2">
                      <span>Pusat Notifikasi & Pengingat</span>
                      <RadiantMorphoMascot className="w-5 h-5" isDark={isDarkMode} />
                    </h2>
                    <p className="text-xs text-sky-400">Pengingat deadline, balasan diskusi, dan pengumuman nilai</p>
                  </div>
                  <button className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition ${
                    isDarkMode ? 'bg-sky-950 border-sky-800 text-cyan-400 hover:bg-sky-900' : 'bg-sky-50 border-sky-100 text-sky-600 hover:bg-sky-100'
                  }`}>
                    Tandai Semua Dibaca
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: '⏰',
                      title: 'Pengingat Deadline: Tugas Kalkulus Lanjut',
                      desc: 'Tersisa 3 jam lagi untuk pengumpulan lembar jawaban. Jangan biarkan streak harianmu putus!',
                      time: '15 menit lalu',
                      unread: true
                    },
                    {
                      icon: '💬',
                      title: 'Siti Rahma Membalas Pertanyaan Diskusi Anda',
                      desc: '"Terima kasih penjelasannya! Sekarang kueri saya berjalan jauh lebih cepat dengan index."',
                      time: '45 menit lalu',
                      unread: true
                    },
                    {
                      icon: '🎉',
                      title: 'Reward Prestasi Terbuka: Skor 92 Kuis Aljabar!',
                      desc: 'Selamat! Kamu memperoleh +150 XP dan menduduki peringkat #3 kelas pekan ini.',
                      time: '2 jam lalu',
                      unread: false
                    },
                    {
                      icon: '📅',
                      title: 'Jadwal Praktikum Baru Telah Ditambahkan',
                      desc: 'Sesi asistensi praktikum Basis Data telah dijadwalkan besok pk 13:00 WIB di Lab Komputer.',
                      time: 'Kemarin',
                      unread: false
                    }
                  ].map((n, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-3xl border transition flex items-start space-x-3.5 ${
                        n.unread 
                          ? isDarkMode 
                            ? 'bg-[#18264D] border-sky-700/80' 
                            : 'bg-sky-50/80 border-sky-200' 
                          : isDarkMode 
                            ? 'bg-[#132042] border-sky-900/50' 
                            : 'bg-white border-sky-100'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 text-base shadow-xs ${
                        isDarkMode ? 'bg-[#0E1935] border border-sky-800' : 'bg-white border border-sky-100'
                      }`}>
                        {n.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className={`text-xs sm:text-sm ${n.unread ? 'font-bold' : 'font-semibold text-slate-400'}`}>
                            {n.title}
                          </h4>
                          {n.unread && (
                            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shrink-0 ml-2 mt-1 animate-pulse"></span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{n.desc}</p>
                        <span className="text-[10px] text-slate-500 mt-2 block">{n.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </main>

        {/* ============================================================ */}
        {/* 🧭 BOTTOM NAVIGATION BAR (HANYA LAYAR HP)                   */}
        {/* Glassmorphism serupa sidebar laptop, ikon aktif timbul naik  */}
        {/* Bubble bulat + kupu-kupu mini hinggap di atasnya             */}
        {/* ============================================================ */}
        <nav className={`md:hidden fixed bottom-0 left-0 right-0 px-2 flex justify-around items-end z-40 border-t backdrop-blur-xl transition-colors duration-400 ${
          isDarkMode
            ? 'bg-[#111C3A]/90 border-sky-900/60 shadow-[0_-8px_30px_rgba(0,0,0,0.55)]'
            : 'bg-white/90 border-sky-100 shadow-[0_-8px_20px_rgba(14,165,233,0.1)]'
        }`} style={{ height: '72px' }}>
          {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={(e) => triggerButterflyBurst(e, item.id)}
                className={`relative flex flex-col items-center justify-end w-16 pb-2 transition-all duration-300 active:scale-95 ${
                  isActive ? 'text-sky-400 font-bold' : 'text-slate-400 hover:text-sky-300 font-medium'
                }`}
                style={{
                  /* Ikon aktif: timbul naik 18px dari dasar bar */
                  transform: isActive ? 'translateY(-18px)' : 'translateY(0px)',
                  transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)'
                }}
              >
                {/* Wrapper bubble lingkaran untuk ikon aktif */}
                {/* Warna gradien sama persis dengan item aktif di sidebar laptop */}
                <div className={`relative flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/30'
                    : 'w-10 h-10'
                }`}>

                  {/* Ikon menu utama */}
                  <Icon className={`transition-all duration-300 ${
                    isActive ? 'w-5 h-5 stroke-[2.5] text-white' : 'w-5 h-5'
                  }`} />
                </div>

                {/* Label teks di bawah ikon — hanya tampil saat tidak aktif */}
                <span className={`text-[10px] mt-0.5 transition-all duration-300 ${
                  isActive ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
                }`}>
                  {item.shortLabel}
                </span>

                {/* Badge notifikasi (misalnya angka pesan baru) */}
                {item.badge && (
                  <span className="absolute top-0 right-1.5 w-4 h-4 bg-sky-500 text-white rounded-full text-[9px] flex items-center justify-center font-bold z-10">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

      </div>
    </div>
  );
}
