import React, { useState, useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, Copy, Check, Terminal, Play, RotateCcw, Code2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');
  const [copied, setCopied] = useState(false);

  // Voter demo state
  const [voterAge, setVoterAge] = useState<string>('20');
  const [isCitizen, setIsCitizen] = useState<boolean>(true);
  const [voterResult, setVoterResult] = useState<string | null>(null);
  const [voterEligible, setVoterEligible] = useState<boolean | null>(null);

  // ATM demo state
  const [atmBalance, setAtmBalance] = useState<number>(1000);
  const [atmAmount, setAtmAmount] = useState<string>('150');
  const [atmPin, setAtmPin] = useState<string>('1234');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [pinInput, setPinInput] = useState<string>('1234');
  const [atmMessage, setAtmMessage] = useState<string>('Welcome to the Python ATM Simulator. Current balance: ₹1,000.00');
  const [atmLogs, setAtmLogs] = useState<string[]>([
    'System initialized with base balance ₹1,000.00',
    'PIN verified: 1234'
  ]);

  // Grade demo state
  const [marks, setMarks] = useState<{ [subject: string]: number }>({
    'Mathematics': 85,
    'Computer Science': 92,
    'Physics': 78,
    'English': 80
  });
  const [gradeResult, setGradeResult] = useState<{
    total: number;
    average: number;
    percentage: number;
    grade: string;
    status: string;
  } | null>(null);

  // Reset tab and states when project changes
  useEffect(() => {
    if (project) {
      setActiveTab('demo');
      setCopied(false);
      // Run initial simulation
      if (project.demoType === 'voter') {
        evaluateVoter(20, true);
      } else if (project.demoType === 'grade') {
        calculateGrade();
      }
    }
  }, [project]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Voter logic
  const evaluateVoter = (ageVal: number, citizen: boolean) => {
    if (isNaN(ageVal) || ageVal < 0) {
      setVoterEligible(false);
      setVoterResult('Invalid age entered. Age cannot be a negative value.');
      return;
    }
    if (!citizen) {
      setVoterEligible(false);
      setVoterResult('Voting requires verified citizenship registration.');
      return;
    }
    if (ageVal >= 18) {
      setVoterEligible(true);
      setVoterResult(`Eligible to vote! Meets minimum requirement of 18 years (Current age: ${ageVal}).`);
    } else {
      const needed = 18 - ageVal;
      setVoterEligible(false);
      setVoterResult(`Not eligible yet. Age is ${ageVal}. Requires ${needed} more year${needed === 1 ? '' : 's'} to vote.`);
    }
  };

  // ATM logic
  const handleAtmDeposit = () => {
    const val = parseFloat(atmAmount);
    if (isNaN(val) || val <= 0) {
      setAtmMessage('Deposit error: Amount must be greater than zero.');
      return;
    }
    const newBal = atmBalance + val;
    setAtmBalance(newBal);
    setAtmMessage(`Success: Deposited ₹${val.toFixed(2)}. Updated balance: ₹${newBal.toFixed(2)}`);
    setAtmLogs(prev => [`[Deposit] +₹${val.toFixed(2)} → Balance: ₹${newBal.toFixed(2)}`, ...prev.slice(0, 5)]);
    setAtmAmount('');
  };

  const handleAtmWithdraw = () => {
    const val = parseFloat(atmAmount);
    if (isNaN(val) || val <= 0) {
      setAtmMessage('Withdrawal error: Amount must be greater than zero.');
      return;
    }
    if (val > atmBalance) {
      setAtmMessage(`Declined: Insufficient funds. Current balance is ₹${atmBalance.toFixed(2)}.`);
      setAtmLogs(prev => [`[Failed Withdrawal] Requested ₹${val.toFixed(2)} exceeds balance ₹${atmBalance.toFixed(2)}`, ...prev.slice(0, 5)]);
      return;
    }
    const newBal = atmBalance - val;
    setAtmBalance(newBal);
    setAtmMessage(`Success: Withdrew ₹${val.toFixed(2)}. Remaining balance: ₹${newBal.toFixed(2)}`);
    setAtmLogs(prev => [`[Withdrawal] -₹${val.toFixed(2)} → Balance: ₹${newBal.toFixed(2)}`, ...prev.slice(0, 5)]);
    setAtmAmount('');
  };

  const handleAtmReset = () => {
    setAtmBalance(1000);
    setAtmMessage('ATM Simulator reset to default balance: ₹1,000.00');
    setAtmLogs(['Reset to default state. Balance: ₹1,000.00']);
  };

  // Grade logic
  const calculateGrade = () => {
    const values = Object.values(marks);
    const total = values.reduce((acc, curr) => acc + curr, 0);
    const count = values.length;
    const average = total / count;
    const percentage = average;

    let grade = 'F (Needs Improvement)';
    let status = 'Needs Improvement';

    if (percentage >= 90) {
      grade = 'A+ (Outstanding)';
      status = 'Passed with Distinction';
    } else if (percentage >= 80) {
      grade = 'A (Excellent)';
      status = 'Passed';
    } else if (percentage >= 70) {
      grade = 'B (Good)';
      status = 'Passed';
    } else if (percentage >= 60) {
      grade = 'C (Satisfactory)';
      status = 'Passed';
    } else if (percentage >= 50) {
      grade = 'D (Pass)';
      status = 'Passed';
    } else {
      grade = 'F';
      status = 'Failed';
    }

    setGradeResult({
      total,
      average: Math.round(average * 10) / 10,
      percentage: Math.round(percentage * 10) / 10,
      grade,
      status
    });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.technology.join(', ')}</span>
            </div>
            <h3 id="modal-title" className="text-xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex items-center px-6 pt-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('demo')}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'demo'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Play className="w-4 h-4" />
              Interactive Logic Simulator
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'code'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-4 h-4" />
              Python Source Code
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {activeTab === 'demo' ? (
            <div className="space-y-6">
              {/* Project 1: Voter Calculator Simulator */}
              {project.demoType === 'voter' && (
                <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      Live Logic Evaluation
                    </span>
                    <span className="text-xs text-slate-500">Condition: age &gt;= 18</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="age-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Test Age (Years)
                      </label>
                      <input
                        id="age-input"
                        type="number"
                        min="0"
                        max="120"
                        value={voterAge}
                        onChange={(e) => {
                          setVoterAge(e.target.value);
                          evaluateVoter(parseInt(e.target.value) || 0, isCitizen);
                        }}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                        placeholder="e.g. 18"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Citizenship Status
                      </label>
                      <div className="flex items-center gap-4 pt-2">
                        <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
                          <input
                            type="radio"
                            name="citizen"
                            checked={isCitizen}
                            onChange={() => {
                              setIsCitizen(true);
                              evaluateVoter(parseInt(voterAge) || 0, true);
                            }}
                            className="text-blue-500 focus:ring-0"
                          />
                          Citizen
                        </label>
                        <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
                          <input
                            type="radio"
                            name="citizen"
                            checked={!isCitizen}
                            onChange={() => {
                              setIsCitizen(false);
                              evaluateVoter(parseInt(voterAge) || 0, false);
                            }}
                            className="text-blue-500 focus:ring-0"
                          />
                          Non-Citizen
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Output Display */}
                  <div
                    className={`p-4 rounded-lg border text-sm font-medium transition-colors ${
                      voterEligible
                        ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                        : 'bg-amber-950/30 border-amber-800/50 text-amber-300'
                    }`}
                  >
                    <div className="text-xs uppercase tracking-wider mb-1 font-mono">
                      Python Output:
                    </div>
                    {voterResult}
                  </div>
                </div>
              )}

              {/* Project 2: ATM Management Simulator */}
              {project.demoType === 'atm' && (
                <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      ATM Terminal Simulation
                    </span>
                    <button
                      onClick={handleAtmReset}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Reset ATM
                    </button>
                  </div>

                  <div className="p-4 bg-slate-900/90 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Current Account Balance</div>
                      <div className="text-2xl font-bold font-mono text-emerald-400">
                        ₹{atmBalance.toFixed(2)}
                      </div>
                    </div>
                    <div className="text-right text-xs text-slate-400 font-mono">
                      <div>Status: Authenticated</div>
                      <div>Account: Demo Student User</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="atm-amount" className="block text-xs font-medium text-slate-300">
                      Transaction Amount (₹)
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        id="atm-amount"
                        type="number"
                        min="1"
                        value={atmAmount}
                        onChange={(e) => setAtmAmount(e.target.value)}
                        placeholder="Enter amount (e.g. 200)"
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleAtmDeposit}
                          className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
                        >
                          Deposit Cash
                        </button>
                        <button
                          onClick={handleAtmWithdraw}
                          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
                        >
                          Withdraw Cash
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-xs text-slate-300 font-mono">
                    {atmMessage}
                  </div>

                  {atmLogs.length > 0 && (
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-slate-400">Recent Terminal Events:</div>
                      <div className="p-2.5 bg-slate-950 rounded border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1">
                        {atmLogs.map((log, idx) => (
                          <div key={idx} className="truncate">
                            &gt; {log}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Project 3: Student Grade Calculator Simulator */}
              {project.demoType === 'grade' && (
                <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      Subject Marks Evaluation
                    </span>
                    <button
                      onClick={calculateGrade}
                      className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium transition-colors"
                    >
                      <Play className="w-3 h-3" />
                      Re-calculate
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {Object.entries(marks).map(([subject, score]) => (
                      <div key={subject} className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                        <label className="block text-[11px] text-slate-400 truncate mb-1">
                          {subject}
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={score}
                          onChange={(e) => {
                            const val = Math.min(100, Math.max(0, parseInt(e.target.value) || 0));
                            setMarks((prev) => {
                              const updated = { ...prev, [subject]: val };
                              return updated;
                            });
                          }}
                          className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-sm font-mono text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    ))}
                  </div>

                  {gradeResult && (
                    <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 space-y-3">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                        <div className="p-2 bg-slate-950/70 rounded border border-slate-800">
                          <div className="text-[11px] text-slate-400 uppercase font-mono">Total Marks</div>
                          <div className="text-base font-semibold font-mono text-white">{gradeResult.total} / 400</div>
                        </div>
                        <div className="p-2 bg-slate-950/70 rounded border border-slate-800">
                          <div className="text-[11px] text-slate-400 uppercase font-mono">Average</div>
                          <div className="text-base font-semibold font-mono text-white">{gradeResult.average}</div>
                        </div>
                        <div className="p-2 bg-slate-950/70 rounded border border-slate-800">
                          <div className="text-[11px] text-slate-400 uppercase font-mono">Percentage</div>
                          <div className="text-base font-semibold font-mono text-blue-400">{gradeResult.percentage}%</div>
                        </div>
                        <div className="p-2 bg-slate-950/70 rounded border border-slate-800">
                          <div className="text-[11px] text-slate-400 uppercase font-mono">Awarded Grade</div>
                          <div className="text-base font-bold font-mono text-emerald-400">{gradeResult.grade}</div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-400 text-center font-mono">
                        Academic Status: <span className="text-slate-200">{gradeResult.status}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Key Algorithmic Concepts Demonstrated
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold" aria-hidden="true">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  main.py
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 bg-slate-950 border border-slate-800 rounded-xl overflow-x-auto text-xs font-mono text-slate-200 leading-relaxed">
                <code>{project.pythonCode}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Beginner Python Project Portfolio</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
