
import { Button, Card, Radio, RadioGroupField, Text } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface Props  {
    mcq: {
        questionText: string| null | undefined;
        optiona: string| null | undefined;
        optionb: string| null | undefined;
        optionc: string| null | undefined;
        optiond: string| null | undefined;
    },

    
    submit :Function;
};

function QuestionCard(data: Props) {
   
    const question = data.mcq;
   

    return (
        <>
            <Card variation="elevated">
                <Text>
                    <ReactMarkdown
                        children={question.questionText ?? ''}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                    />
                </Text>
                <RadioGroupField
                    legend="options"
                    name="options"
                >
                    <Radio value="optiona"><ReactMarkdown
                        children={question.optiona ?? ''}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                    /></Radio>
                    <Radio value="optionb"><ReactMarkdown
                        children={question.optionb ?? ''}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                    /> </Radio>
                    <Radio value="optionc"><ReactMarkdown
                        children={question.optionc ?? ''}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                    /></Radio>
                    <Radio value="optiond"><ReactMarkdown
                        children={question.optiond ?? ''}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                    /></Radio>
                </RadioGroupField>
                <Button
                    loadingText=""
                    onClick={()=>data.submit()}
                >
                    Submit
                </Button>
            </Card>
        </>


    )

}

export default QuestionCard;