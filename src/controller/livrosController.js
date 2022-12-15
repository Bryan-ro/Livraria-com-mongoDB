import livros from "../models/Livro.js";

class livroController {
    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros)
            });
    };

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livro) => {
                if (err) {
                    res.status(400).send({ message: err.message + " - Livro não localizado" });
                } else {
                    res.status(200).send(livro);
                };
            });
    };

    static cadastrarLivro = (req, res) => {
        const livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).json({ message: `${err.message} - falha ao cadastrar livro` })
            } else {
                res.status(201).json(livro)
            };
        });
    };

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ Message: "O livro foi cadastrado com sucesso" });
            } else {
                res.status(500).send({ Message: err.message })
            };
        });
    };

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro exluido com sucesso." })
            } else {
                res.status(500).json(err.message)
            };
        });
    };

    static listarPorAutor = (req, res) => {
        const autor = req.query.autor

        livros.find({ "autor": autor }, {})
            .populate('autor', 'nome')
            .exec((err, livros) => {
                res.status(200).json(livros);
            });
    };
};

export default livroController;