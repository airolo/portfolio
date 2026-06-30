import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMessageCircle, FiSend, FiX } from 'react-icons/fi';
import { chatbotKnowledge, chatbotQuickActions } from '../data/portfolioData';

const createMessage = (role, text) => ({
  id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  role,
  text,
  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
});

const panelVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.94, transformOrigin: 'bottom right' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 420,
      damping: 32,
      mass: 0.85,
      staggerChildren: 0.045,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.96,
    transition: { duration: 0.16, ease: 'easeInOut' },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: 'easeOut' },
  },
};

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([createMessage('assistant', chatbotKnowledge.greeting)]);
  const [inputValue, setInputValue] = useState('');
  const [isReplying, setIsReplying] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const quickReplies = useMemo(() => chatbotQuickActions, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  useEffect(() => {
    if (open) {
      // focus the input when opening
      inputRef.current?.focus();
    } else {
      // return focus to the toggle button when closed
      toggleButtonRef.current?.focus();
    }
  }, [open]);

  const getReply = (userText) => {
    const normalizedText = userText.toLowerCase();
    const matchedResponse = chatbotKnowledge.responses.find((item) =>
      item.match.some((phrase) => normalizedText.includes(phrase)),
    );

    return matchedResponse?.reply ?? 'I can help with projects, skills, experience, and contact details. Try one of the quick actions or ask a specific question.';
  };

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed || isReplying) {
      return;
    }

    setMessages((current) => [...current, createMessage('user', trimmed)]);
    setInputValue('');
    setIsReplying(true);
    inputRef.current?.focus();

    window.setTimeout(() => {
      setMessages((current) => [...current, createMessage('assistant', getReply(trimmed))]);
      setIsReplying(false);
      inputRef.current?.focus();
    }, 450);
  };

  const handleQuickAction = (action) => {
    sendMessage(action.prompt ?? action.label);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 flex flex-col items-end sm:inset-x-auto sm:bottom-5 sm:right-5">
      <AnimatePresence>
        {open ? (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-4 max-h-[calc(100svh-6rem)] w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 sm:rounded-[1.75rem]"
            role="dialog"
            aria-modal="false"
            aria-label="Portfolio assistant"
          >
            <motion.div variants={sectionVariants} className="flex items-center justify-between gap-4 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800 sm:px-5 sm:py-4">
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src="/temp-hero-placeholder.jpg"
                  alt="Bradley Soloria"
                  className="h-11 w-11 shrink-0 rounded-full border border-zinc-200 object-cover dark:border-zinc-800"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-zinc-950 dark:text-zinc-50">Bradley Soloria</p>
                  
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-950 transition hover:border-zinc-950 dark:border-zinc-800 dark:text-zinc-50 dark:hover:border-zinc-200"
                aria-label="Close chatbot"
              >
                <FiX />
              </button>
            </motion.div>

            <motion.div variants={sectionVariants} className="h-[13rem] space-y-4 overflow-y-auto px-4 py-4 sm:h-[15rem] sm:px-5" role="log" aria-live="polite">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] overflow-hidden break-words rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === 'user' ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950' : 'bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200'}`}>
                    <p>{message.text}</p>
                    <p className="mt-2 text-[11px] opacity-60">{message.time}</p>
                  </div>
                </div>
              ))}
              {isReplying ? (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-zinc-100 px-4 py-3 text-sm text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                    Bradley is replying...
                  </div>
                </div>
              ) : null}
              <div ref={messagesEndRef} />
            </motion.div>

            <motion.div variants={sectionVariants} className="border-t border-zinc-200 px-4 py-4 dark:border-zinc-800 sm:px-5">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    onClick={() => handleQuickAction(action)}
                    disabled={isReplying}
                    className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-200 dark:hover:text-zinc-50"
                  >
                    {action.label}
                  </button>
                ))}
              </div>

              <form
                className="mt-4 flex items-center gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage(inputValue);
                }}
              >
                <input
                  className="min-w-0 flex-1 rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-zinc-200"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder="Ask a question..."
                  aria-label="Chat message"
                  ref={inputRef}
                  disabled={isReplying}
                />
                <button
                  type="submit"
                  disabled={isReplying || !inputValue.trim()}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                  aria-label="Send message"
                >
                  <FiSend />
                </button>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((current) => !current)}
        animate={{ rotate: open ? 8 : 0, scale: open ? 0.96 : 1 }}
        transition={{ type: 'spring', stiffness: 420, damping: 24 }}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 shadow-lg transition hover:-translate-y-0.5 hover:border-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:border-zinc-200"
        aria-label={open ? 'Close chatbot' : 'Open chatbot'}
        ref={toggleButtonRef}
      >
        <FiMessageCircle size={22} />
      </motion.button>
    </div>
  );
}
