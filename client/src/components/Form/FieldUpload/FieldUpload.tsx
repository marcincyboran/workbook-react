import React, { ChangeEvent, useState, DragEvent, useEffect } from 'react';
import './FieldUpload.scss';
import SvgSprite from '../../UI/SvgSprite/SvgSprite';
import Thumbnail from '../../../components/Thumbnail/Thumbnail';
import { InfoType } from '../../../helpers/types';

type FieldUploadProps = {
    // value?: File[]
};

const FieldUpload: React.FC<FieldUploadProps> = ({}) => {
    const [files, setFiles] = useState<File[]>([]);
    const [info, setInfo] = useState<InfoType>();

    const save = (add: File[]) => {
        const filtered = add.filter(el => {
            console.log(el.name);
        });
        console.log(filtered);
        setFiles([...files, ...add]);
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const filesList = event.currentTarget.files;
        if (!filesList) return;
        save(Array.from(filesList));
    };

    const onDropHandler = (event: DragEvent) => {
        event.preventDefault();
        save(Array.from(event.dataTransfer.files));
    };

    const onDragOverHandler = (event: DragEvent) => {
        event.preventDefault();
    };

    return (
        <div className="form__field-upload">
            {files && files.map(file => <Thumbnail file={file} key={file.name.split('.')[0]} />)}
            <label className="form__field-upload-label" onDrop={onDropHandler} onDragOver={onDragOverHandler}>
                <input
                    className="form__field-upload-input"
                    name="imgs[]"
                    multiple
                    type="file"
                    onChange={onChangeHandler}
                    accept="image/*"
                />
                <SvgSprite icon="plus" color="primary" />
                {info ? info : null}
            </label>
        </div>
    );
};

export default FieldUpload;
