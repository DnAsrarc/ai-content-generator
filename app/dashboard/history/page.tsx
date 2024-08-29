"use client"
import React, { useEffect, useState } from 'react';
import { fetchHistory } from '@/utils/fetchHistory';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface HistoryItem {
    id: number;
    formData: string;
    aiResponse: string | null;
    templateSlug: string;
    createdBy: string | null;
    createdAt: string | null;
}

const History = () => {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    useEffect(() => {
        async function loadHistory() {
            const data = await fetchHistory();
            setHistory(data);
        }
        loadHistory();
    }, []);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard');
    };

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-6">History</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-bold bg-gray-100 p-3 mb-4">
                    <div>Template</div>
                    <div>AI Response</div>
                    <div>Date</div>
                    <div>Words</div>
                    <div>Copy</div>
                </div>
                {history.map((item, index) => {
                    const template = Templates.find(t => t.slug === item.templateSlug);
                    const aiResponseText = item.aiResponse ?? 'No response';
                    const truncatedResponse = aiResponseText.length > 100 ? aiResponseText.slice(0, 100) + '...' : aiResponseText;
                    const wordCount = aiResponseText.split(' ').length;

                    return (
                        <div
                            key={item.id}
                            className={`grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 border-b pb-2 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                        >
                            <div className="flex items-center">
                                <img src={template?.icon} alt="icon" className="w-6 h-6 mr-2" />
                                {template?.name}
                            </div>
                            <div className="truncate">
                                {expandedId === item.id ? (
                                    <div>
                                        {aiResponseText}
                                        <button onClick={() => setExpandedId(null)} className="text-blue-500 ml-2">Show Less</button>
                                    </div>
                                ) : (
                                    <div>
                                        {truncatedResponse}
                                        {aiResponseText.length > 100 && (
                                            <button onClick={() => setExpandedId(item.id)} className="text-blue-500 ml-2">Show More</button>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div>{item.createdAt ?? 'Unknown'}</div>
                            <div>{wordCount}</div>
                            <div>
                                <Button onClick={() => copyToClipboard(aiResponseText)}>
                                    <Copy className="w-4 h-4 mr-1" /> Copy
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default History;
