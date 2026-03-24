# Guia de Contribución

## 1. Actualizar la rama `test`

Antes de comenzar cualquier desarrollo, asegúrate de tener la última versión de la rama `test`:

```bash
git checkout test
git pull origin test
```

## 2. Crear una nueva rama

Debes crear una rama basada en `test` usando el siguiente formato:

```bash
change/module-action
```

## Ejemplos:

- `feat/users`
- `feat/auth-login`
- `fix/users-validation`

## Convenciones:

- feat -> Nueva funcionalidad
- fix -> Corrección de errores
- refactor -> Mejora de código sin cambiar funcionalidad
- docs -> Cambios en documentación
- style -> Cambios visuales

## Comando: 

```bash
git checkout -b change/module-action
```

## 3. Realizar commits

## Comandos:

```bash
git add .
git commit -m "Descripción"
```

## 4. Subir la rama

```bash
git push origin rama-creada
```

## 5. Crear la Pull Request

Una vez finalices tus cambios:

- Crea una pull request hacia la rama `test`
- Asegurate que no haya conflictos

## Formato de Pull Request

```Markdown
## 📌 Descripción
Explica brevemente qué hace este cambio.

## 🛠️ Cambios realizados
- Cambio 1
- Cambio 2
- Cambio 3

## 🧪 ¿Cómo probarlo?
Pasos para validar el funcionamiento.

## ✅ Checklist
- [ ] Código probado
- [ ] Sin errores en consola
- [ ] Sigue las convenciones del proyecto
```

## Reglas importantes

- No trabajar directamente sobre `test`
- Mantener ramas pequeñas y especificas