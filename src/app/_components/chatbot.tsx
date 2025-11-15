"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, Bot, User, Clock, Check, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Message {
    id: string;
    text: string;
    isBot: boolean;
    timestamp: Date;
    isDelivered?: boolean;
    options?: string[];
}

export default function ChatBot() {
    const router = useRouter();
    const [isClosing, setIsClosing] = useState(false);

    const [messages, setMessages] = useState<Message[]>([
        {
            id: crypto.randomUUID(),
            text: "Olá! Eu sou o <b>Assistente da Prisma</b>.<br>Posso ajudar com dúvidas sobre nossos projetos, obras ou o blog?",
            isBot: true,
            timestamp: new Date(),
            options: ["Ver projetos", "Dúvidas sobre obras", "Falar com atendimento", "Falar sobre o blog"]
        },
    ]);

    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [showTooltip, setShowTooltip] = useState(true);

    const projetos = [
        { title: "Projetos Residenciais", href: "/galeria/projeto_residenciais" },
        { title: "Projetos Sob Medida", href: "/galeria/projeto_sob_medida" },
        { title: "Obras Públicas e Infraestrutura", href: "/galeria/obras_publicas" },
    ];

    const rotasComFeedback = [
        ...projetos,
        { title: "Ver últimos posts", href: "/blog" },
        { title: "Ver todos", href: "/blog" },
        { title: "o WhatsApp", href: "https://wa.me/5511999999999" },
        { title: "Enviar e-mail", href: "mailto:contato@prismaconstrutora.com.br" },
    ];

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        const last = messages[messages.length - 1];
        if (last?.isBot && !last.isDelivered) {
            const timer = setTimeout(() => {
                setMessages((prev) =>
                    prev.map((m) => (m.id === last.id ? { ...m, isDelivered: true } : m))
                );
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [messages]);

    useEffect(() => {
        if (!isChatOpen && showTooltip) {
            const timer = setTimeout(() => setShowTooltip(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [isChatOpen, showTooltip]);

    useEffect(() => {
        document.body.style.overflow = isChatOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isChatOpen]);

    const addMessage = (text: string, isBot: boolean, options?: string[]) => {
        const msg: Message = {
            id: crypto.randomUUID(),
            text,
            isBot,
            timestamp: new Date(),
            isDelivered: !isBot,
            options,
        };
        setMessages((prev) => [...prev, msg]);
    };

    const simulateTyping = (callback: () => void) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            callback();
        }, 800 + Math.random() * 700);
    };

    const handleBotResponse = (userInput: string) => {
        const lower = userInput.toLowerCase().trim();

        if (["oi", "olá", "bom dia", "boa tarde", "boa noite", "e aí"].some((g) => lower.includes("voltar"))) {
            simulateTyping(() => {
                addMessage(
                    "Olá! Como posso ajudar você hoje?",
                    true,
                    ["Ver projetos", "Dúvidas sobre obras", "Falar com atendimento", "Falar sobre o blog"]

                );
            });
            return;
        }

        if (lower.includes("projeto") || lower.includes("ver projeto")) {
            simulateTyping(() => {
                const links = projetos
                    .map(
                        (p) => `<a href="${p.href}" class="underline text-orange-600">${p.title}</a>`
                    )
                    .join("<br>• ");
                addMessage(
                    `Temos três tipos de projetos:<br><br>• ${links}`,
                    true,
                    projetos.map((p) => p.title)
                );
            });
            return;
        }

        if (lower.includes("duvida") || lower.includes("obra") || lower.includes("construção") || lower.includes("prazo") || lower.includes("material")) {
            simulateTyping(() => {
                addMessage(
                    `Aqui vão algumas dúvidas comuns sobre nossas obras:<br><br>` +
                    `• <b>Qual o prazo médio?</b><br>De 12 a 24 meses, dependendo do porte.<br><br>` +
                    `• <b>Usam materiais sustentáveis?</b><br>Sim! Priorizamos aço reciclado e concreto ecológico.<br><br>` +
                    `• <b>Posso visitar a obra?</b><br>Sim, agende com o gerente pelo WhatsApp.<br><br>` +
                    `• <b>E se chover muito?</b><br>Temos plano de contingência com cobertura parcial.<br><br>` +
                    `• <b>Como é o controle de qualidade?</b><br>A cada etapa, com laudos e fotos diárias.`,
                    true,
                    ["Ver mais no blog", "Falar com o atendimento", "Voltar"]
                );
            });
            return;
        }

        if (lower.includes("blog") || lower.includes("artigo") || lower.includes("leitura")) {
            simulateTyping(() => {
                addMessage(
                    "Nosso blog tem artigos sobre </br>Acesse em: <a href='/blog' class='underline text-orange-600'>/blog</a>",
                    true,
                    ["Ver últimos posts", "Voltar"]
                );
            });
            return;
        }

        if (lower.includes("contato") || lower.includes("falar") || lower.includes("atendimento")) {
            simulateTyping(() => {
                addMessage(
                    "Você pode falar com nosso time comercial por:<br><br>• WhatsApp: <a href='https://wa.me/5511999999999' class='underline text-orange-600' target='_blank'>(11) 99999-9999</a><br>• E-mail: contato@prismaconstrutora.com.br<br>• Formulário no site",
                    true,
                    ["Abrir WhatsApp", "Enviar e-mail", "Voltar"]
                );
            });
            return;
        }

        simulateTyping(() => {
            addMessage(
                "Desculpe, não entendi. Posso ajudar com:<br>• Projetos<br>• Informações sobre obras<br>• Nosso blog<br>• Contato comercial",
                true,
                ["Ver projetos", "Dúvidas sobre obras", "Falar com atendimento", "Falar sobre o blog"]
            );
        });
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;
        addMessage(inputValue, false);
        handleBotResponse(inputValue);
        setInputValue("");
    };
    const handleOption = async (option: string) => {
        addMessage(option, false);

        const destino = rotasComFeedback.find(r => r.title === option);
        if (destino) {
            simulateTyping(() => {
                addMessage(`Redirecionando para <b>${destino.title}</b>…`, true);

                setIsClosing(true);
                setTimeout(() => {
                    setIsChatOpen(false);
                    setIsClosing(false);
                }, 1200);

                setTimeout(() => {
                    if (destino.href.startsWith("http") || destino.href.startsWith("mailto")) {
                        window.open(destino.href, "_blank", "noopener,noreferrer");
                    } else {
                        router.push(destino.href);
                    }
                }, 1400);
            });
            return;
        }

        handleBotResponse(option);
    };

    const formatTime = (date: Date) =>
        date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    if (!isChatOpen) {
        return (
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsChatOpen(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="bg-[#0D194F] text-white cursor-pointer rounded-full p-4 shadow-xl hover:scale-110 transition-all duration-300 animate-pulse"
                >
                    <MessageCircle size={28} />
                </button>

                {(showTooltip || isHovered) && (
                    <div className="absolute -top-20 -left-40 bg-[#0D194F] text-white p-4 rounded-xl shadow-2xl text-sm w-56 text-center animate-fade-in">
                        <p className="font-semibold">Fale com a Prisma!</p>
                        <p className="text-xs opacity-90">Dúvidas? Clique aqui.</p>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="fixed inset-0 md:inset-auto md:bottom-6 md:right-6 md:w-96 md:h-[600px] z-50 flex items-end justify-end">
            <div className="bg-white rounded-2xl shadow-2xl w-full h-full md:h-full flex flex-col border border-gray-200 overflow-hidden">
                <div className="bg-[#0D194F] text-white p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                            <Image
                                src="/img/Logo_empresa.png"
                                alt="Logo da Prisma Construtora"
                                width={90}
                                height={90}
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Assistente da Prisma</h3>
                            <p className="text-xs opacity-90">Online e pronto para ajudar</p>
                        </div>
                    </div>
                    <button onClick={() => setIsChatOpen(false)} className="hover:opacity-70 cursor-pointer">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-50 to-white">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                            <div
                                className={`max-w-[95%] ${msg.isBot ? "bg-white border" : "bg-[#E97527] text-white"
                                    } rounded-2xl p-4 shadow-sm`}
                            >
                                <div className="flex items-start gap-2">
                                    {msg.isBot && (
                                        <div className="w-7 h-7 bg-[#E97527] rounded-full flex items-center justify-center flex-shrink-0">
                                            <Bot size={14} className="text-white" />
                                        </div>
                                    )}
                                    <div>
                                        <p
                                            className={`text-sm ${msg.isBot ? "text-gray-800" : "text-white"
                                                } whitespace-pre-line`}
                                            dangerouslySetInnerHTML={{ __html: msg.text }}
                                        />
                                        <div className="flex items-center gap-1 mt-1">
                                            {msg.isBot && !msg.isDelivered ? (
                                                <Clock size={10} className="text-gray-400" />
                                            ) : (
                                                <Check
                                                    size={10}
                                                    className={msg.isBot ? "text-gray-400" : "text-white/70"}
                                                />
                                            )}
                                            <span
                                                className={`text-xs ${msg.isBot ? "text-gray-400" : "text-white/70"
                                                    }`}
                                            >
                                                {formatTime(msg.timestamp)}
                                            </span>
                                        </div>
                                    </div>
                                    {!msg.isBot && (
                                        <div className="w-7 h-7 bg-[#0D194F] rounded-full flex items-center justify-center flex-shrink-0">
                                            <User size={14} className="text-white" />
                                        </div>
                                    )}
                                </div>

                                {msg.options && (
                                    <div className="mt-3 space-y-2">
                                        {msg.options.map((opt, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleOption(opt)}
                                                className="block w-full text-left p-2.5 bg-[#E97527] hover:bg-[#f2924c] text-white rounded-lg text-sm font-medium transition-colors"
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white border rounded-2xl p-4 shadow-sm">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t bg-white">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Digite sua mensagem..."
                            disabled={isClosing || isTyping}
                            className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E97527] focus:border-transparent text-sm"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim()}
                            className="bg-[#E97527] hover:bg-[#f2924c] disabled:bg-gray-300 text-white rounded-full p-3 transition-colors"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}