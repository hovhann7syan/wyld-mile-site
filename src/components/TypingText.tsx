"use client";

import React, { useState, useEffect } from 'react';

export default function TypingText() {
  const fullText = "GO WYLD.\nBE FREE.\nLIVE IT.";
  const [displayedText, setDisplayedText] = useState("");
  const [isClient, setIsClient] = useState(false);

  // Ждем загрузки клиента, чтобы избежать ошибок Next.js
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (currentIndex <= fullText.length) {
        // Обновляем текст на экране
        setDisplayedText(fullText.slice(0, currentIndex));
        
        if (currentIndex === fullText.length) return; // Конец текста

        const char = fullText[currentIndex];
        currentIndex++;

        // 🎛 НАСТРОЙКА РИТМА ПЕЧАТИ (как на видео)
        let delay = 70; // Очень быстрая, дерзкая печать букв (70 мс)
        
        if (char === '.') {
          delay = 1200; // Кинематографичная пауза ПОСЛЕ ТОЧКИ (1.2 секунды)
        } else if (char === '\n') {
          delay = 200; // Небольшая пауза при переходе на новую строку
        }

        timeout = setTimeout(type, delay);
      }
    };

    // Запускаем печать через 0.5 сек после загрузки страницы
    timeout = setTimeout(type, 500);

    return () => clearTimeout(timeout);
  }, [isClient]);

  if (!isClient) {
    return <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[1.1] mb-8 min-h-[3.3em]"></h1>;
  }

  return (
    <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 drop-shadow-2xl text-center min-h-[3.3em]">
      {displayedText.split('\n').map((line, index, arr) => (
        <React.Fragment key={index}>
          {line}
          {index < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
      
      {/* Дерзкий мигающий курсор (исчезает, когда печать закончена) */}
      {displayedText.length < fullText.length && (
        <span className="inline-block w-[0.08em] h-[0.9em] bg-yellow-400 ml-1 animate-pulse align-baseline shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
      )}
    </h1>
  );
}