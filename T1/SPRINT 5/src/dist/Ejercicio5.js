"use strict";
// main.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function buscarPokemon() {
    return __awaiter(this, void 0, void 0, function () {
        var inputElement, pokemonNameOrId, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputElement = document.getElementById('pokemonInput');
                    pokemonNameOrId = inputElement.value.toLowerCase();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/".concat(pokemonNameOrId))];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    mostrarInfoPokemon(data);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error al buscar Pokémon:', error_1);
                    mostrarError();
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function mostrarInfoPokemon(data) {
    return __awaiter(this, void 0, void 0, function () {
        var pokemonInfoElement, evolutionInfoElement, speciesResponse, speciesData, evolutionChainUrl, evolutionResponse, evolutionData, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pokemonInfoElement = document.getElementById('pokemonInfo');
                    if (!pokemonInfoElement) {
                        console.error('Elemento de información del Pokémon no encontrado.');
                        return [2 /*return*/];
                    }
                    evolutionInfoElement = document.createElement('div');
                    evolutionInfoElement.id = 'evolutionInfo';
                    pokemonInfoElement.innerHTML = "\n      <h2>".concat(data.name, " (ID: ").concat(data.id, ")</h2>\n      <img src=\"").concat(data.sprites.front_default, "\" alt=\"").concat(data.name, "\">\n      <p><strong>Tipo:</strong> ").concat(data.types.map(function (type) { return type.type.name; }).join(', '), "</p>\n      <p><strong>Estad\u00EDsticas:</strong></p>\n      <ul>\n          ").concat(data.stats.map(function (stat) { return "<li>".concat(stat.stat.name, ": ").concat(stat.base_stat, "</li>"); }).join(''), "\n      </ul>\n      <p><strong>Movimientos:</strong></p>\n      <ul>\n          ").concat(data.moves.map(function (move) { return "<li>".concat(move.move.name, "</li>"); }).join(''), "\n      </ul>\n      <p><strong>Evoluciones:</strong></p>\n  ");
                    pokemonInfoElement.appendChild(evolutionInfoElement);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, fetch(data.species.url)];
                case 2:
                    speciesResponse = _a.sent();
                    return [4 /*yield*/, speciesResponse.json()];
                case 3:
                    speciesData = _a.sent();
                    evolutionChainUrl = speciesData.evolution_chain.url;
                    if (!evolutionChainUrl) return [3 /*break*/, 6];
                    return [4 /*yield*/, fetch(evolutionChainUrl)];
                case 4:
                    evolutionResponse = _a.sent();
                    return [4 /*yield*/, evolutionResponse.json()];
                case 5:
                    evolutionData = _a.sent();
                    mostrarInfoEvoluciones(evolutionData, evolutionInfoElement);
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_2 = _a.sent();
                    console.error('Error al obtener información de evoluciones:', error_2);
                    mostrarError();
                    return [3 /*break*/, 8];
                case 8:
                    pokemonInfoElement.classList.remove('hidden');
                    return [2 /*return*/];
            }
        });
    });
}
function mostrarInfoEvoluciones(evolutionData, evolutionInfoElement) {
    if (!evolutionInfoElement) {
        console.error('Elemento de información de evoluciones no encontrado.');
        return;
    }
    function mostrarEvolucionesRecursivo(chain) {
        evolutionInfoElement.innerHTML += "\n          <p>".concat(chain.species.name, "</p>\n      ");
        if (chain.evolves_to && chain.evolves_to.length > 0) {
            evolutionInfoElement.innerHTML += '<ul>';
            for (var _i = 0, _a = chain.evolves_to; _i < _a.length; _i++) {
                var evolution = _a[_i];
                mostrarEvolucionesRecursivo(evolution);
            }
            evolutionInfoElement.innerHTML += '</ul>';
        }
    }
    mostrarEvolucionesRecursivo(evolutionData.chain);
}
function mostrarError() {
    var pokemonInfoElement = document.getElementById('pokemonInfo');
    var evolutionInfoElement = document.getElementById('evolutionInfo');
    if (pokemonInfoElement) {
        pokemonInfoElement.innerHTML = '<p class="warning">Error: Pokémon no encontrado.</p>';
        pokemonInfoElement.classList.remove('hidden');
    }
    if (evolutionInfoElement) {
        evolutionInfoElement.innerHTML = '';
    }
}
