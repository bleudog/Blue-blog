import React, { useRef } from 'react';
import metadata from '@data/metadata';
import giscus from '@lib/giscus';

const Comments = () => {
    const comment = useRef(null);

    giscus({
        url: metadata.giscus.url,
        repo: metadata.giscus.repo,
        repoId: metadata.giscus.repoId,
        category: metadata.giscus.category,
        categoryId: metadata.giscus.categoryId,
        mapping: 'pathname',
        theme: 'preferred_color_scheme',
        crossorigin: 'anonymous',
        loading: 'lazy',
        lang: 'ko',
        inputPosition: 'top',
        ref: comment,
    });

    return (
        <div className="w-full mt-[5em]">
            <div ref={comment}></div>
        </div>
    );
};

export default Comments;