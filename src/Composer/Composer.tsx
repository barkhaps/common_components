import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Box } from "@mui/material";

interface ComposerEditorProps {
    onSend: (content: string) => void;
}

const Composer: React.FC<ComposerEditorProps> = ({ onSend }) => {
    const [content, setContent] = useState<string>("");

    const handleEditorChange = (newContent: string) => {
        setContent(newContent);
    };

    const handleSend = () => {
        onSend(content);
    };

    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <Editor
                apiKey='kxaegvhvmscuajlr689uknbmq4qyqefk8s0zk4kky3ep9ixr'
                initialValue="<p>Compose your email here...</p>"
                init={{
                    height: 400,
                    menubar: false,
                    plugins: [
                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                    ],
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    toolbar_mode: 'wrap',
                }}
                onEditorChange={handleEditorChange}
            />

            <Button variant="contained" color="primary" onClick={handleSend}>
                Send Email
            </Button>
        </Box>
    );
};

export default Composer;
