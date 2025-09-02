import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } },
};

type TeamMember = { name: string; email: string; gender: string };

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [college, setCollege] = useState('');
  const [teamType, setTeamType] = useState<'Solo' | 'Duo' | 'Squad'>('Solo');
  const [members, setMembers] = useState<TeamMember[]>([{ name: '', email: '', gender: '' }]);

  const handleTeamTypeChange = (type: 'Solo' | 'Duo' | 'Squad') => {
    setTeamType(type);
    const count = type === 'Solo' ? 1 : type === 'Duo' ? 2 : 4;
    setMembers(Array(count).fill({ name: '', email: '', gender: '' }));
  };

  const handleMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let message = `*Hack Qubit Registration*\n*College:* ${college}\n*Team Type:* ${teamType}\n`;

    members.forEach((m, i) => {
      message += `\n*Member ${i + 1}*\n- Name: ${m.name}\n- Email: ${m.email}\n- Gender: ${m.gender}`;
    });

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '918986793479';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Clear form
    setCollege('');
    setTeamType('Solo');
    setMembers([{ name: '', email: '', gender: '' }]);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={onClose}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-secondary rounded-lg shadow-2xl shadow-accent/20 w-full max-w-lg relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
              whileHover={{ scale: 1.2, rotate: 90 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <CloseIcon />
            </motion.button>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Hack Qubit: Registration Form
              </h2>
              <p className="text-gray-400 mb-6">
                Welcome, racers, to the starting grid of Hack Qubit!
              </p>

              {/* Event Info Section */}
              <div className="bg-primary/40 border border-gray-700 rounded-lg p-4 mb-6 text-gray-200 text-sm space-y-2">
                <p>
                  <strong>Theme:</strong> Formula 1
                </p>
                <p>
                  <strong>Dates:</strong> 7th & 8th October
                </p>
                <p>
                  <strong>Team Size:</strong> 1 to 4 members
                </p>
                <p>
                  <strong>Participation Fee:</strong> ₹600 per team
                </p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a
                    href="https://rvscethack-qubit.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline"
                  >
                    hack-qubit.vercel.app
                  </a>
                </p>
                <p>
                  <strong>Brochure:</strong>{' '}
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline"
                  >
                    View Brochure
                  </a>
                </p>
                <p className="text-red-400 text-xs">
                  *Once a team is registered, the registration fee will not be refunded.*
                </p>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="college"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    College Name
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    required
                    className="w-full bg-primary border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent transition-colors hover:border-accent/60"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Team Type
                  </label>
                  <select
                    className="w-full bg-primary border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent transition-colors hover:border-accent/60"
                    value={teamType}
                    onChange={(e) =>
                      handleTeamTypeChange(e.target.value as 'Solo' | 'Duo' | 'Squad')
                    }
                  >
                    <option value="Solo">Solo</option>
                    <option value="Duo">Duo</option>
                    <option value="Squad">Squad</option>
                  </select>
                </div>

                {members.map((member, index) => (
                  <div
                    key={index}
                    className="p-4 bg-primary/50 rounded-md border border-gray-700 space-y-2"
                  >
                    <h4 className="text-lg font-bold text-white">
                      Member {index + 1}
                    </h4>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full bg-primary border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                      value={member.name}
                      onChange={(e) =>
                        handleMemberChange(index, 'name', e.target.value)
                      }
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full bg-primary border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                      value={member.email}
                      onChange={(e) =>
                        handleMemberChange(index, 'email', e.target.value)
                      }
                    />
                    <select
                      required
                      className="w-full bg-primary border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                      value={member.gender}
                      onChange={(e) =>
                        handleMemberChange(index, 'gender', e.target.value)
                      }
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                ))}

                <motion.button
                  type="submit"
                  className="w-full bg-accent hover:bg-highlight text-primary font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Registration
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal;
