import { CardInfo } from '../types';
import Card from './Card';

interface ResultsProps {
    results: CardInfo[];
}

const Results = ({ results }: ResultsProps) => {
    return (
        <>
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto py4">
                {results.map((result) => (
                    <Card key={result.id} result={result} />
                ))}
            </div>
        </>
    );
};

export default Results;
