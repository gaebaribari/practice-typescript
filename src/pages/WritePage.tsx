import TextArea from "../components/TextArea";

interface TodoItem {
	title: string;
	completed: boolean;
	completedDate: string | null;
}

interface Prop {
	text: string;
	onText: (input: React.ChangeEvent<HTMLTextAreaElement> | string) => void;
	TodoList: TodoItem[];
}

export default function WritePage({ text, onText, TodoList }: Prop) {
	return (
		<>
			<TextArea text={text} onText={onText} TodoList={TodoList}></TextArea>
		</>
	);
}
