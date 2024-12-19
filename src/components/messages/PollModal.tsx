import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';

interface PollModalProps {
  onClose: () => void;
  onCreatePoll: (question: string, options: string[]) => void;
}

export function PollModal({ onClose, onCreatePoll }: PollModalProps) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const addOption = () => {
    if (options.length < 10) {
      setOptions([...options, '']);
    }
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <Modal
      title="Create Poll"
      isOpen={true}
      onClose={onClose}
      footer={
        <>
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={() => onCreatePoll(question, options.filter(Boolean))}
            disabled={!question || options.filter(Boolean).length < 2}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            Create Poll
          </button>
        </>
      }
    >
      <div className="space-y-4">
        <Input
          label="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Options
          </label>
          {options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                value={option}
                onChange={(e) => updateOption(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
              {options.length > 2 && (
                <button
                  onClick={() => removeOption(index)}
                  className="p-2 text-gray-500 hover:text-red-500"
                >
                  <Minus className="h-5 w-5" />
                </button>
              )}
            </div>
          ))}
          {options.length < 10 && (
            <button
              onClick={addOption}
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
            >
              <Plus className="h-5 w-5" />
              <span>Add Option</span>
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}